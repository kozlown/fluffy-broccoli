import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='content'>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
