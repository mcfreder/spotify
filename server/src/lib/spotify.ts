import SpotifyWebApi from 'spotify-web-api-node'
import * as dotenv from 'dotenv'

dotenv.config()

export const Spotify = new SpotifyWebApi({
  redirectUri: 'http://localhost:3000',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})