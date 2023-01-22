import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom'
import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Blog from './components/Blog'
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Homepage</Link></li>
          <li><Link to='/blog'>Blogs</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/aboutus'>About us</Link></li>
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

