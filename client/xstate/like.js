import { createMachine, assign } from 'xstate'
import Cookies from 'js-cookie'

const fetcher = (...args) => fetch(...args).then(res => res.json())
const API = process.env.NEXT_PUBLIC_API

export const likeMachine = createMachine({
  id: 'like',
  initial: 'idle',
  context: {
    result: [],
    error: undefined,
  },
  states: {

    idle: {
      on: {
        HANDLE_LIKE: 'handle',
      }
    },

    handle: {
      invoke: {
        src: async (_, e) => {
          const { id, status } = e.data
          const access_token = Cookies.get('access_token')
          const uid = Cookies.get('uid')
          const uri = status ? 'remove-track' : 'add-track'

          return await fetch(API + uri, {
            method: 'POST',
            body: JSON.stringify({ id, access_token }),
            headers: {
              'Content-Type': 'application/json',
              uid,
            },
          })
        },
        onDone: {
          target: 'idle'
        },
        onError: {
          actions: assign({ error: (_, event) => event.data }),
          target: 'failure'
        }
      }
    },

    failure: {
      /* Handle failure events */
    }
  }
})