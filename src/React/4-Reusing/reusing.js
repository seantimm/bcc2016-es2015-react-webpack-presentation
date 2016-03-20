import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import User from './simple'
import ThirdParty from './thirdparty'

class Wrapper extends Component {
  render() {
    return (
      <div><h1>Children</h1>{this.props.children}</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Wrapper>
        <User name="Sean" role="Speaker" /><ThirdParty />
      </Wrapper>
    )
  }
}

ReactDOM.render(<App />, document.body)