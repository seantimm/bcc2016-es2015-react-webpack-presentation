import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class User extends Component {
  render() {
    return (
      <ul>
        <li className="foo">Name: {this.props.name}</li>
        <li>Role: {this.props.role}</li>
      </ul>
    )
  }
}

User.defaultProps = {
  name: 'Missing Name',
  role: 'Missing Role'
}

User.propTypes = {
  name: PropTypes.string,
  role: PropTypes.oneOf(['Speaker', 'Listener'])
}

export default User