import React, { Component } from 'react'

export default class Author extends Component {
  render() {
    return (
      <div>
        This Blog is written by {this.props.match.params.author}
      </div>
    )
  }
}
