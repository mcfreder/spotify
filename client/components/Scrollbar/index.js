import { Scrollbars } from 'react-custom-scrollbars'
import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Scrollbar(props) {
  return (
    <Scrollbars
      renderView={
        props => <div className={cx('container')} />
      }

      renderThumbVertical={
        () => <div className={cx('thumb-vertical')} />
      }
      renderTrackVertical={
        () => <div className={cx('track-vertical')} />
      }
      renderThumbHorizontal={
        () => <div className={cx('thumb-horizontal')} />
      }
      renderTrackHorizontal={
        () => <div className={cx('track-horizontal')} />
      }
    >
      {props.children}
    </Scrollbars>
  )
}

