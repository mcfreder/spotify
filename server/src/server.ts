/**
 * App setup, include global middlewares to this file
 */

import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import * as dotenv from "dotenv"
import * as env from 'env-var'
import AppController from './controllers/app.controller'
import { attachControllers } from '@decorators/express'
import rateLimit from 'express-rate-limit'

dotenv.config()

const HTTP_PORT = env.get('PORT').asIntPositive() || 1337

/**
 * Server
 */
export default class Server {
  /* Field */
  public port: number
  public app: Application


  /**
   * Constructor
   * @param port :: port to start server
   */
  constructor(port: number) {
    /* Props */
    this.port = port
    this.app = express()
  }

  /**
   * Initialize the server
   */
  public async initialize(): Promise<void> {
    this.middlewares()
    this.listen()
  }

  /**
   * Initialize middlewares to use.
   */
  private middlewares(): void {
    this.app.use(express.json(), helmet(), morgan('tiny'), rateLimit({ windowMs: 1000, max: 20 }), cors())

    attachControllers(this.app, [AppController]) /* Add Controllers here */

    /* Error handling in dev mode */
    this.app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log(error)

      res.json({ message: error.message, errorCode: 400, mode: 'dev' })
    })
  }

  /**
   * Make server listen.
   */
  private listen(): void {
    this.app.listen(this.port,
      () => console.log(`Server running on port: ${this.port}`)
    )
  }
}

/* Init server */
const server = new Server(HTTP_PORT)

server.initialize()
