import { createMachine, assign } from 'xstate'

export const seekMachine = createMachine({
  id: 'seek',
  initial: 'idle',
  context: {
    duration: null,
    elapsed: null,
    interval: 1000,
    error: undefined,
  },
  states: {

    idle: {
      on: {
        MOD: 'onchange',
      }
    },

    onchange: {
      invoke: {
        src: async (_, event) => {
          return {
            duration: event.data.duration.toFixed(1),
            elapsed: event.data.position
          }
        },
        onDone: {
          actions: assign({
            duration: (_, event) => event.data.duration,
            elapsed: (_, event) => event.data.elapsed,
          }),
          target: 'progress'
        }
      }
    },

    progress: {
      invoke: {
        src: () => (cb) => {
          const interval = setInterval(() => {
            cb('TICK');
          }, 1000)


          return () => {
            clearInterval(interval);
          }
        }
      },
      on: {
        '': {
          target: 'finished',
          cond: ctx => ctx.elapsed >= ctx.duration
        },
        MOD: {
          target: 'onchange',
        },
        UPDATE: {
          target: 'idle',
          actions: assign({
            elapsed: (_, event) => event.data.position
          })
        },
        TICK: {
          actions: assign({
            elapsed: (ctx) => +(ctx.elapsed + ctx.interval).toFixed(1)
          })
        },
      }
    },

    finished: {

    }

  }
})