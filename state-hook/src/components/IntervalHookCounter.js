import React, {useEffect, useState} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    function dosomething() {
      console.log(/*someProp*/)
    }
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [/*someProp*/]) //use count in dependency injection is valid

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
