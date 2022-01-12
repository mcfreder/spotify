import { createMachine, assign } from 'xstate'
import Cookies from 'js-cookie'

const fetcher = (...args) => fetch(...args).then(res => res.json())
const API = process.env.NEXT_PUBLIC_API

export const authMachine = createMachine({
  id: 'auth',
  initial: 'fetch',
  context: {
    status: false,
    user: undefined,
    access_token: undefined,
    interval: 60 * 60
  },
  states: {

    fetch: {
      invoke: {
        id: 'fetchToken',
        src: async () => {
          const code = new URLSearchParams(window.location.search).get('code')

          if (!code) {
            const response = await fetcher(API + 'access-token', { headers: { 'uid': Cookies.get('uid') } })

            Cookies.set('access_token', response.access_token)

            return response
          }

          const res = await fetcher(API + 'auth', {
            method: 'POST',
            body: JSON.stringify({ code }),
            headers: {
              'Content-Type': 'application/json',
            }
          })

          Cookies.set('uid', res.uid)
          window.location.href = '/'
        },
        onDone: {
          target: 'idle',
          actions: assign({
            user: (_, event) => event.data.user,
            access_token: (_, event) => event.data.access_token
          })
        },
        onError: {
          target: 'failure'
        }
      }
    },

    idle: {
      id: 'timer',
      invoke: {
        src: (ctx) => (cb) => {
          const interval = setInterval(() => {
            cb('REFRESH')
          }, 1000 * ctx.interval)

          return () => {
            clearInterval(interval)
          }
        },
      },
      on: {
        REFRESH: {
          target: 'fetch',
        },
        LOGOUT: {
          actions: assign({
            user: () => {
              Cookies.remove('uid')

              return undefined
            }
          })
        }
      }
    },

    failure: {

    }
  }
})