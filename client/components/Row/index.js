import React from 'react'

import { useContext } from 'react'
import { GlobalContext } from '@xstate/context'
import { useActor } from '@xstate/react'

import { useSpotifyPlayer, usePlayerDevice, usePlaybackState } from 'react-spotify-web-playback-sdk'
import { parseMs, formatDate } from '@lib/utils'

import { Play, Pause } from '@components/SVGs'
import Like from '@components/Like'
import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Row({ expanded, item, i, added, mutate }) {
  const playbackState = usePlaybackState()
  const player = useSpotifyPlayer()
  const device = usePlayerDevice()
  const service = useContext(GlobalContext)
  const [state, send] = useActor(service.playback)
  const { current } = state.context
  const isPaused = playbackState?.paused
  const isActive = item.id === current.id

  return (
    <div className={cx('grid')} data-expanded={expanded} data-active={isActive} data-paused={isPaused}>

      <div className={cx('grid-cell')} tabIndex='-1'>
        <div className={cx('box')}>
          {!isActive || isPaused ?
            <div className={cx('index', 'absolute', 'right')}>
              {i + 1}
            </div> : null
          }

          {isActive &&
            <img className={cx('absolute', 'image')} width='14' height='14' alt=''
              src='https://open.scdn.co/cdn/images/equaliser-animated-green.f93a2ef4.gif' />
          }

          {!isActive &&
            <button className={cx('absolute', 'btn')}
              onClick={() => send({ type: 'PLAYBACK', data: { device, item } })}>
              <Play />
            </button>
          }

          {isActive && isPaused &&
            <button className={cx('absolute', 'btn')}
              onClick={() => player.resume()}>
              <Play />
            </button>
          }

          {isActive && !isPaused &&
            <button className={cx('absolute', 'btn')}
              onClick={() => player.pause()}>
              <Pause />
            </button>
          }

        </div>
      </div>

      <div className={cx('grid-cell')} tabIndex='-1'>
        <img className={cx('poster')} src={item.album.images[1].url} />

        <div className={cx('grid-template')}>

          <div data-label='title' className={cx('overflow')}>
            {item.name}
          </div>

          <div data-label='subtitle' className={cx('overflow')}>
            {item.artists.map((artist, i) =>
              <React.Fragment>
                <span key={i} className={cx('artist')}>
                  {artist.name}
                </span>
                {i < item.artists.length - 1 && ', '}
              </React.Fragment>
            )}
          </div>

        </div>
      </div>

      <div className={cx('grid-cell')} tabIndex='-1'>
        <div className={cx('album')}>
          {item.album.name}
        </div>
      </div>

      {expanded &&
        <div className={cx('grid-cell')} tabIndex='-1'>
          <div className={cx('typography')}>
            {formatDate(added)}
          </div>
        </div>
      }

      <div className={cx('grid-cell')} tabIndex='-1'>
        <Like status={item.saved_track} id={item.id} mutate={mutate} />
        <div className={cx('duration')}>
          {parseMs(item.duration_ms)}
        </div>
      </div>

    </div >
  )
}

Row.defaultProps = {
  expanded: false,
  added: null
}

