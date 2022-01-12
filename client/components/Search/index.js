import debounce from 'lodash.debounce'

import { useQueryValue } from '@zustand/search'
import { useRef } from 'react'

import styles from './style.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Search() {
  const { value, setValue, clear } = useQueryValue()
  const inputRef = useRef(null)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <input maxLength='80' autoCorrect='off' autoCapitalize='off' spellCheck='false' placeholder='Artister, låtar eller poddar'
          defaultValue={value}
          ref={inputRef}
          onChange={debounce((e) => setValue(e.target.value), 500)}
        />
        <div className={cx('box')}>
          <div className={cx('icon')}>
            <svg height='24' width='24' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z'>
              </path>
            </svg>
          </div>
          {value?.length > 0 &&
            <button className={cx('clear')} onClick={() => clear(inputRef)}>
              <svg height='24' width='24' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M20.354 4.353l-.708-.706L12 11.293 4.353 3.647l-.706.706L11.293 12l-7.646 7.646.706.708L12 12.707l7.646 7.647.708-.708L12.707 12z'></path>
              </svg>
            </button>
          }
        </div>
      </div>
    </div>
  )
}
