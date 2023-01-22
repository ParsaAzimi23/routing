import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Homepage</Link></li>
          <li><Link to='/blog'>Blogs</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/aboutus'>About us</Link></li>
        </ul>
      </div>
    )
  }
}
