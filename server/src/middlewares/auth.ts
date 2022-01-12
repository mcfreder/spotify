import { Request, Response, NextFunction } from 'express'
import { Middleware } from '@decorators/express'
import { redis } from '../redis'

interface RequestToken extends Request {
  refresh_token: string
}

/**
 * Auth guard, check if there is any refresh token connected to the user id
 */
export default class AuthGuard implements Middleware {
  public async use(req: RequestToken, res: Response, next: NextFunction): Promise<any> {
    const { uid } = req.headers
    const refresh_token = await redis.get(uid as string)

    if (!uid || !refresh_token)
      return res.status(403).json(null)

    req.refresh_token = refresh_token

    next()
  }
}