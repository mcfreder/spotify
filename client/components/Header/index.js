import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Header({ expanded }) {
  return (
    <div className={cx('wrapper')}>
      <div data-expanded={expanded} className={cx('grid')}>
        <div className={cx('box')}>
          #
        </div>
        <div className={cx('box')}>
          <div className={cx('typography')}>
            Titel
          </div>
        </div>
        <div className={cx('box')}>
          <div className={cx('typography')}>
            Album
          </div>
        </div>

        {expanded &&
          <div className={cx('box')}>
            <div className={cx('typography')}>
              Datum Tillagd
            </div>
          </div>
        }

        <div className={cx('box')}>
          <svg height='16' width='16' viewBox='0 0 16 16'>
            <path fill='currentColor' d='M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 14C3.916 14 1 11.084 1 7.5S3.916 1 7.5 1 14 3.916 14 7.5 11.084 14 7.5 14z'></path>
            <path fill='none' d='M16 0v16H0V0z'></path>
          </svg>
        </div>
      </div>
    </div>
  )
}


Header.defaultProps = {
  expanded: false
}