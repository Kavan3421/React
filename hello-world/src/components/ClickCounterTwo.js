import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <button onClick={incrementCount}>Cliked {count} times</button>
    )
  }
}

export default ClickCounterTwo
