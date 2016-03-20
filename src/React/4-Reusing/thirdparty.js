import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
require('jquery-tooltipster/js/jquery.tooltipster.js')

class HoverMe extends Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.tooltip)).tooltipster({
      content: $('<h1>BOOM</h1>')
    });
  }

  render() {
    return (<div ref="tooltip">Hover Me!</div>)
  }
}

export default HoverMe