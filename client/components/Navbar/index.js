import { useResize } from '@zustand/resize'
import { useRouter } from 'next/router'
import { paths, items, Logo } from '@components/SVGs'
import Link from 'next/link'
import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Navbar() {
  const { widthValue, setWidth } = useResize()
  const router = useRouter()

  function handleResize(e) {
    document.addEventListener('mousemove', setWidth, false)

    document.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', setWidth, false)
    }, false)
  }

  return (
    <div className={cx('wrapper')} style={{ '--navbar-width': widthValue + 'px' }}>
      <div className={cx('vertical')}>

        <div className={cx('box')}>
          <div className={cx('logo')}>
            <Logo />
          </div>
        </div>

        <ul>
          {paths.map((path, i) =>
            <li key={i}>
              <Link href={path.href}>
                <a data-active={router.asPath === path.href ? true : false}>
                  {path.svg}
                  <div className={cx('typography')}>
                    {path.name}
                  </div>
                </a>
              </Link>
            </li>
          )}
        </ul>

        <ul>
          {items.map((item, i) =>
            <li key={i}>
              <Link href={item.href}>
                <a data-active={router.asPath === item.href ? true : false}>
                  <div data-label={item.label} className={cx('icon')}>
                    {item.svg}
                  </div>
                  <div className={cx('typography')}>
                    {item.name}
                  </div>
                </a>
              </Link>
            </li>
          )}
          <hr />
        </ul>
      </div>

      <div className={cx('download')}>
        <a target='_blank' href='https://open.spotify.com/download'>
          <svg role='img' height='24' width='24' viewBox='0 0 24 24'>
            <path fill='currentColor' d='M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z'></path>
          </svg>
          <div className={cx('typography')}>
            Installera app
          </div>
        </a>
      </div>

      <div className={cx('resize')} onMouseDown={handleResize} />
    </div>
  )
}




