import React, { Component, PropTypes } from 'react'

class ExampleComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { msg, clicks, onClick } = this.props

    return (
      <div onClick={onClick}>
        <h1>I'm a component</h1>
        <p>{ msg } { clicks }</p>
      </div>
    )
  }
}

export default ExampleComponent
