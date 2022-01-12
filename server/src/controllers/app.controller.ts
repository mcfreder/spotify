import Express from 'express'
import { redis } from '../redis'
import { Spotify } from '../lib/spotify'
import { Response, Controller, Get, Request, Body, Post, Put, Headers } from '@decorators/express'
import AuthGuard from '../middlewares/auth'
import axios from 'axios'


@Controller('/')
export default class AppController {

  /**
   * Get an access token
   */
  @Get('/access-token', [AuthGuard])
  async getToken(@Response() res: Express.Response, @Request('refresh_token') refresh_token: string) {
    Spotify.setRefreshToken(refresh_token)

    const response = await Spotify.refreshAccessToken()
    const { access_token } = response.body

    Spotify.setAccessToken(access_token as string)

    const user: any = await Spotify.getMe()

    res.json({ access_token, user: user.body })
  }

  /**
   * Auth new user to Redis
   */
  @Post('/auth')
  async auth(@Response() res: Express.Response, @Body('code') code: string) {
    if (!code)
      return null

    const response = await Spotify.authorizationCodeGrant(code)
    const { refresh_token, access_token } = response.body

    Spotify.setAccessToken(access_token as string)

    const user: any = await Spotify.getMe()

    await redis.set(user.body.id, refresh_token)

    res.json({ uid: user.body.id })
  }

  /**
   * Search Spotify API
   */
  @Post('/search', [AuthGuard])
  async search(@Response() res: Express.Response, @Body() body: any) {
    const { value, access_token } = body
    let array: any[] = []

    if (!access_token || !value)
      return null

    Spotify.setAccessToken(access_token as string)

    const result: any = await Spotify.searchTracks(value, { limit: 50 })

    if (!result)
      return res.json([])

    /**
     * Check if any track from result is a saved track (liked)
     */
    const { items } = result.body.tracks

    items.forEach((track: any) => array = [...array, track.id])

    const data = await Spotify.containsMySavedTracks(array)

    data.body.forEach((value: boolean, i: number) => {
      items[i].saved_track = value
    })

    res.json(items)
  }

  /**
   * Get all saved tracks based of limit & offset
   */
  @Get('/get-saved-tracks', [AuthGuard])
  async getMySavedTracks(@Response() res: Express.Response, @Headers() headers: any) {
    const { offset, access_token } = headers

    Spotify.setAccessToken(access_token)

    const result: any = await Spotify.getMySavedTracks({ limit: 35, offset: 0 })

    if (!result)
      return null

    /**
     * Check if any track from result is a saved track (liked)
     */

    const { items } = result.body

    items.forEach((item: any) => item.track.saved_track = true)

    res.json(items)
  }


  /**
   * Add track to saved tracks in Spotify API
   */
  @Post('/add-track', [AuthGuard])
  async addToMySavedTracks(@Response() res: Express.Response, @Body() body: any) {
    const { id, access_token } = body

    if (!access_token || !id)
      return null

    Spotify.setAccessToken(access_token as string)

    await Spotify.addToMySavedTracks([id])

    res.json(true)
  }

  /**
  * Remove track from saved tracks in Spotify API
  */
  @Post('/remove-track', [AuthGuard])
  async removeFromMySavedTracks(@Response() res: Express.Response, @Body() body: any) {
    const { id, access_token } = body

    if (!access_token || !id)
      return null

    Spotify.setAccessToken(access_token as string)

    await Spotify.removeFromMySavedTracks([id])

    res.json(true)
  }


  /**
   * Run/Update Playback
   */
  @Put('/playback', [AuthGuard])
  async getPlayback(@Response() res: Express.Response, @Body() body: any) {
    const { item, device, access_token } = body

    if (!item) return null

    await axios({
      method: 'PUT',
      url: `https://api.spotify.com/v1/me/player/play?device_id=${device.device_id}`,
      data: JSON.stringify({ uris: [item.uri] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    })

    res.json(item)
  }

}
