import { useContext } from 'react'
import { GlobalContext } from '@xstate/context'
import { useActor } from '@xstate/react'
import { usePlaybackState, useSpotifyPlayer } from 'react-spotify-web-playback-sdk'
import {
  Shuffle,
  Previous,
  Play,
  Pause,
  Next,
  Repeat
} from '@components/SVGs'
import Seek from '@components/Seek'

import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Controls() {
  const playbackState = usePlaybackState()
  const player = useSpotifyPlayer()
  const service = useContext(GlobalContext)
  const [state] = useActor(service.playback)
  const { current } = state.context

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>

        <div className={cx('box')}>
          <button className={cx('btn')}>
            <Shuffle />
          </button>
          <button className={cx('btn')}>
            <Previous />
          </button>
        </div>

        <button className={cx('playBtn')} disabled={current.id ? false : true} onClick={() => !playbackState.paused ? player.pause() : player.resume()}>
          {playbackState ? playbackState?.paused ? <Play /> : <Pause /> : <Play />}
        </button>

        <div className={cx('box')}>
          <button className={cx('btn')}>
            <Next />
          </button>
          <button className={cx('btn')}>
            <Repeat />
          </button>
        </div>

      </div>

      <Seek />
    </div>
  )
}