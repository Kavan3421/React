import React from 'react'

function FunctionsClick() {

  function clickHandler() {
    console.log('Button clicked')
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionsClick
