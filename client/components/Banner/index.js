import React from 'react'

import { useContext } from 'react'
import { GlobalContext } from '@xstate/context'
import { useActor } from '@xstate/react'

import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Banner({ length }) {
  const service = useContext(GlobalContext)
  const [state] = useActor(service.auth)
  const { user } = state.context

  return (
    <React.Fragment>
      <div className={cx('wrapper')}>

        <div className={cx('box')}>
          <img src={'/heart.png'} alt="Gillade låtar" />
        </div>

        <div className={cx('container')}>
          <h2>
            Spellista
          </h2>
          <span>
            <h1>
              Gillade låtar
            </h1>
          </span>
          <div>
            <a>
              {user.display_name}
            </a>
            <span>
              {length} låtar
            </span>
          </div>
        </div>

      </div>

      <div className={cx('shade')} />
    </React.Fragment>
  )
}

Banner.defaulProps = {
  length: 0
}
