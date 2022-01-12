import Row from '@components/Row'
import Scrollbar from '@components/Scrollbar'
import Banner from '@components/Banner'
import Navbuttons from '@components/Navbuttons'
import Menu from '@components/Menu'
import Header from '@components/Header'

import { useSavedTracks } from '@lib/hooks'

import styles from '@styles/modules/main.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Likes() {
  const { result, mutate } = useSavedTracks()

  return (
    <div role='main' className={cx('box')}>
      <Scrollbar>

        <div role='header' className={cx('box')}>
          <Navbuttons />
          <Menu />
        </div>

        <Banner length={result && result.length} />

        <div className={cx('container')} style={{ marginTop: '16px' }}>
          <Header expanded />

          {result && result.map((item, i) => item &&
            <Row expanded key={i} item={item.track} added={item.added_at} mutate={mutate} i={i} />
          )}
        </div>

      </Scrollbar>
    </div>
  )
}