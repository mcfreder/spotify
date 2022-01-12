import { usePlaybackState, useSpotifyPlayer } from 'react-spotify-web-playback-sdk'
import React from 'react'
import { parseMs } from '@lib/utils'

import styles from './style.module.scss'
import classNames from 'classnames/bind'

import { useMachine } from '@xstate/react'
import { seekMachine } from '@xstate/seek'

const cx = classNames.bind(styles)

export default function Seek() {
  const playbackState = usePlaybackState()
  const player = useSpotifyPlayer()
  const [state, send] = useMachine(seekMachine)
  const { elapsed, duration } = state.context

  const style = {
    '--progress-bar-transform': `${!elapsed ? 0 : (elapsed.toFixed(1) / duration) * 100}%`
  }

  React.useEffect(() => {
    if (playbackState) {

      if (!playbackState.paused) {
        const { duration, position } = playbackState

        send({
          type: 'MOD', data: {
            duration,
            position
          }
        })
      } else {
        const { position } = playbackState

        send({
          type: 'UPDATE',
          data: {
            position
          }
        })
      }

    }
  }, [playbackState])

  return (
    <div className={cx('container')}>
      <div dir='right' className={cx('typography')}>
        {parseMs(elapsed)}
      </div>

      <div className={cx('box')}>
        <input disabled={playbackState ? false : true} style={style} type='range' min='0' max={duration} step='0.1' value={!elapsed ? 0 : elapsed.toFixed(1)} readOnly />

        {playbackState &&
          <input type='range' min='0' max={duration} step='0.1' onClick={(e) => player.seek(e.target.valueAsNumber)} />
        }
      </div>

      <div dir='left' className={cx('typography')}>
        {parseMs(duration)}
      </div>
    </div>
  )
}