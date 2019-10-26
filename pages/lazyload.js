import React, { useState } from 'react'
//import moment from 'moment'
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/customize'))

export default () => {
  const [time, setTime] = useState(+new Date())

  const changeTime = async () => {
    const moment = await import('moment')
    setTime(moment.default(+new Date()).format())
  }

  return (
    <>
      <div>lazyload demo</div>
      <div>{time}</div>
      <button onClick={changeTime}>changeTime</button>
      <One />
    </>
  )
}
