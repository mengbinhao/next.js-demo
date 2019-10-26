import React, { useState } from 'react'

const cssExample = () => {
  const [color, setColor] = useState('blue')

  const changeColor = () => {
    setColor(color === 'blue' ? 'red' : 'blue')
  }

  return (
    <>
      <div>css test</div>
      <div className="test">css test</div>
      <div id="cc">change my color</div>
      <button onClick={changeColor}>change color</button>
      <style jsx>
        {`
          div {
            color: blue;
          }
          .test {
            color: red;
          }
          #cc {
            color: ${color};
          }
        `}
      </style>
    </>
  )
}

export default cssExample
