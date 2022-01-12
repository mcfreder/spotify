import { useState } from 'react'
import Cookies from 'js-cookie'
const API = process.env.NEXT_PUBLIC_API

import { UnfilledHeart, FilledHeart, AnimatedRemoval, AnimatedHeart } from '@components/SVGs'
import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Like({ status, id, mutate }) {
  const [animate, setAnimate] = useState(false)

  const style = {
    color: status && '#1db954',
    opacity: status || animate ? '1' : null
  }

  function handleClick() {
    let timeoutValue = status ? 425 : 650
    let uri = status ? 'remove-track' : 'add-track'

    /* Animate the SVG */
    setAnimate(true)
    setTimeout(async () => {
      /* Send update to server */
      const access_token = Cookies.get('access_token')
      const uid = Cookies.get('uid')

      await fetch(API + uri, {
        method: 'POST',
        body: JSON.stringify({ id, access_token }),
        headers: {
          'Content-Type': 'application/json',
          uid,
        },
      })

      /* Sync UI */
      await mutate()

      /* Stop the animation when update of the ui is done */
      setAnimate(false)
    }, timeoutValue)
  }

  return (
    <button className={cx('btn')} style={style} onClick={() => handleClick()}>
      {status && !animate && <UnfilledHeart />}
      {!status && !animate && <FilledHeart />}
      {animate && status && <AnimatedRemoval />}
      {animate && !status && <AnimatedHeart />}
    </button>
  )
}
