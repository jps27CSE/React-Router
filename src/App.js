import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'

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
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
