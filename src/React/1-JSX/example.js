import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>What is this madness?</span>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.body)