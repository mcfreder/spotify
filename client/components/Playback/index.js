import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk'
import { useCallback } from 'react'
import { useVolume } from '@zustand/volume'

import { useContext } from 'react'
import { GlobalContext } from '@xstate/context'
import { useActor } from '@xstate/react'

export default function Playback({ children }) {
  const service = useContext(GlobalContext)
  const [state] = useActor(service.auth)
  const { access_token } = state.context
  const { value } = useVolume()

  const getOAuthToken = useCallback(async callback => callback(access_token), [access_token])

  return (
    <WebPlaybackSDK deviceName='Nextfire' getOAuthToken={getOAuthToken} volume={value}>
      {children}
    </WebPlaybackSDK>
  )
}