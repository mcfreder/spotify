import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
// FIX ROUTER
export default function Navbuttons() {
  const router = useRouter()

  return (
    <div className={cx('wrapper')}>
      <Link href='/'>
        <button className={cx('btn')}>
          <svg role='img' height='22' width='22' viewBox='0 0 24 24'>
            <polyline points='16 4 7 12 16 20' fill='none' stroke='currentColor'></polyline>
          </svg>
        </button>
      </Link>
      <Link href='/likes'>
        <button disabled className={cx('btn')}>
          <svg role='img' height='22' width='22' viewBox='0 0 24 24'>
            <polyline points='8 4 17 12 8 20' fill='none' stroke='currentColor'></polyline>
          </svg>
        </button>
      </Link>
    </div>
  )
}
