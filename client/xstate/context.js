import { createContext } from 'react'
import { useInterpret } from '@xstate/react'
import { authMachine } from './auth'
import { playbackMachine } from './playback'

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }) => {
  const auth = useInterpret(authMachine)
  const playback = useInterpret(playbackMachine)

  return (
    <GlobalContext.Provider value={{ auth, playback }}>
      {children}
    </GlobalContext.Provider>
  )
}