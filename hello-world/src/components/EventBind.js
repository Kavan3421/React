import React, { Component } from 'react'

class EventBind extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }

    // this.clickHandler = this.clickHandler.bind(this) //bind the function to the component instance
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Goodbye!'
  //   })
  //   console.log(this)  
  // }

  clickHandler = () => {
    this.setState({
      message: 'Goodbye!'
    })
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}{/*first approch*/}
        {/*<button onClick={() => this.clickHandler()}>Click</button>*/}{/*second approch*/}
        <button onClick={this.clickHandler}>Click</button>{/*third approch*/}
      </div>
    )
  }
}

export default EventBind
