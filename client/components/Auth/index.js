import { useContext } from 'react'
import { GlobalContext } from '@xstate/context'
import { useActor } from '@xstate/react'

export default function Auth({ children, fallback }) {
  const service = useContext(GlobalContext)
  const [state] = useActor(service.auth)
  const { user } = state.context

  if (state.value === 'fetch') return <div>Loading...</div>

  return user ? children : fallback
}