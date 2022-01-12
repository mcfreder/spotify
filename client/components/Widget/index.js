import React, { useContext } from 'react'
import { GlobalContext } from '@xstate/context'
import { useActor } from '@xstate/react'

import { UnfilledHeart, FilledHeart } from '@components/SVGs'

import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Widget() {
  const service = useContext(GlobalContext)
  const [state] = useActor(service.playback)
  const { current } = state.context

  return (
    <div className={cx('wrapper')}>
      {current.id &&
        <React.Fragment>
          <div className={cx('container')}>
            <img src={current.album.images[0].url} alt={current.name} />
          </div>

          <div className={cx('grid')}>

            <div role='title' className={cx('box')}>
              <div className={cx('typography')}>
                {current.name}
              </div>
            </div>

            <div role='subtitle' className={cx('box')}>
              {current.artists.map((artist, i) =>
                <div key={i} className={cx('typography')} style={{ marginRight: i < current.artists.length - 1 ? '3px' : 0 }}>
                  {artist.name}
                  {i < current.artists.length - 1 &&
                    <span>
                      ,
                    </span>
                  }
                </div>
              )}
            </div>

          </div>

          <button aria-checked={current.saved_track} className={cx('btn')}>
            {current.saved_track ? <UnfilledHeart /> : <FilledHeart />}
          </button>
        </React.Fragment>
      }
    </div>
  )
}