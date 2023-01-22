import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Products extends Component {
  render() {
    return (
      <div>
        <h1>Products:</h1>
        <ul>
          <li><Link to="/products/1">One</Link></li>
          <li><Link to="/products/2">Two</Link></li>
          <li><Link to="/products/3">Three</Link></li>
          <li><Link to="/products/4">Four</Link></li>
        </ul>
      </div>
    )
  }
}