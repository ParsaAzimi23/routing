import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
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
          {/* when we are using switch we must take the most common URL which may repeat in different URLs, to the end of the route because it matches the first URL in all pages */}
          <Switch>
            <Route path='/aboutus' component={Aboutus} />
            <Route path='/blog' component={Blog} />
            <Route path='/products' component={Products} />
            <Route path='/' component={Homepage} />
          </Switch>
        </div>
        {/* <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/blog' component={Blog} />
          <Route path='/products' component={Products} />
        </div> */}
      </div>
    )
  }
}

