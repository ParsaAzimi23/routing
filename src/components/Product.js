import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1>This is the #{this.props.match.params.id} product </h1>
      </div>
    )
  }
}
