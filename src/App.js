import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import Homepage from './components/Homepage'
import Aboutus from './components/Aboutus'
import Blog from './components/Blog'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Author from './components/Author'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          {/* when we are using switch we must take the most common URL which may repeat in different URLs, to the end of the route because it matches the first URL in all pages */}
          <Switch>
            <Route path="/blog/:author" component={Author} />
            <Route path="/products/:id" component={Product} /> {/* :id is the id wich can be found in components by react dev tools */}
            <Route path='/aboutus' component={Aboutus} />
            <Route path='/blog' render={ (props) => <Blog name="Parsa" {...props} />} />  {/* giving props to a component in Route */}
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

