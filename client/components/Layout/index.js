import Navbar from '@components/Navbar'
import Volume from '@components/Volume'
import Controls from '@components/Controls'
import Widget from '@components/Widget'
import Playback from '@components/Playback'

import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Layout({ children }) {
  return (
    <Playback>
      <div className={cx('wrapper')}>
        <Navbar />

        {children}

        <div className={cx('playback')}>
          <div className={cx('grid')}>
            <Widget />
            <Controls />
            <Volume />
          </div>
        </div>
      </div>
    </Playback>
  )
}