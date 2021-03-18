import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Post from './components/Post'
import PrivateRoute from './PrivateRoute'
import Login from './components/Login'
import LogOut from './components/LogOut'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <PrivateRoute path='/post/:postID' component={Post} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={LogOut} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
