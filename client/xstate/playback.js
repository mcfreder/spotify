import { createMachine, assign } from 'xstate'
import Cookies from 'js-cookie'

const fetcher = (...args) => fetch(...args).then(res => res.json())
const API = process.env.NEXT_PUBLIC_API

export const playbackMachine = createMachine({
  id: 'playback',
  initial: 'idle',
  context: {
    current: {
      id: null
    },
    error: undefined,
  },
  states: {

    idle: {
      on: {
        PLAYBACK: 'onplayback'
      }
    },

    onplayback: {
      invoke: {
        src: async (_, event) => {
          const { device, item } = event.data
          const access_token = Cookies.get('access_token')
          const uid = Cookies.get('uid')

          await fetcher(API + 'playback', {
            method: 'PUT',
            body: JSON.stringify({ item, device, access_token }),
            headers: {
              'Content-Type': 'application/json',
              uid,
            },
          })

          return item
        },
        onDone: {
          target: 'idle',
          actions: assign({
            current: (_, event) => event.data
          })
        },
        onError: {
          target: 'idle',
          actions: assign({ error: (_, event) => event.data })
        }
      }
    },

    failure: {
      /* Handle failure events */
    }

  }
})