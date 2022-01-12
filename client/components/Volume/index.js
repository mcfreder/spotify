import styles from './style.module.scss'
import classNames from 'classnames/bind'
import { useVolume } from '@zustand/volume'
import { Speaker, Fullscreen } from '@components/SVGs'

const cx = classNames.bind(styles)

export default function Volume() {
  const { value, setVolume } = useVolume()
  const style = { '--progress-bar-transform': `${value * 100}%` }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <button className={cx('btn')}>
          <Speaker />
        </button>
        <input type='range' max='1' min='0' step='0.01' defaultValue={value} style={style} onChange={(e) => setVolume(e.target.valueAsNumber)} />
      </div>
      <button className={cx('fullscreen')}>
        <Fullscreen />
      </button>
    </div>
  )
}
