import Search from '@components/Search'
import Scrollbar from '@components/Scrollbar'
import Navbuttons from '@components/Navbuttons'
import Menu from '@components/Menu'
import Header from '@components/Header'
import Row from '@components/Row'

import { useQueryValue } from '@zustand/search'
import { useSearchTracks } from '@lib/hooks'

import styles from '@styles/modules/main.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Page() {
  const { value } = useQueryValue()
  const { result, mutate } = useSearchTracks(value)

  return (
    <div role='main' className={cx('box')}>
      <Scrollbar>
        <div role='header' className={cx('box')}>
          <Navbuttons />
          <Search />
          <Menu />
        </div>

        <div className={cx('container')}>
          {result && <Header />}

          {result && result.map((item, i) => item &&
            <Row key={i} item={item} i={i} mutate={mutate} />)}
        </div>
      </Scrollbar>
    </div>
  )
}
