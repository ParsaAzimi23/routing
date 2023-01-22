import React, { Component } from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Blog from './components/Blog'
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href='/'>Homepage</a></li>
          <li><a href='/blog'>Blogs</a></li>
          <li><a href='/products'>Products</a></li>
          <li><a href='/aboutus'>About us</a></li>
        </ul>
        <div>
          <Route path='/' component={Homepage} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/blog' component={Blog} />
          <Route path='/products' component={Products} />
        </div>
      </div>
    )
  }
}

