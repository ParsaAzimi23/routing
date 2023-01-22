import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blogs:</h1>
        <ul>
          <li><Link to="/blog/Klum">Klum</Link></li>
          <li><Link to="/blog/Schiller">Schiller</Link></li>
          <li><Link to="/blog/Azimi">Azimi</Link></li>
          <li><Link to="/blog/Schmeikel">Schmeikel</Link></li>
        </ul>
      </div>
    )
  }
}
