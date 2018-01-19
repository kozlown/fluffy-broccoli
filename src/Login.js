import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

class Login extends React.Component {
  render () {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <input type="password" style={{gridRow: '5 / 6'}} name="password" placeholder='Password' />
        <input type="email" style={{gridRow: '7 / 8'}} name="email" placeholder='Email' />
        <Link to="/signup">I need an account</Link>
        <button style={{gridRow: '11 / 12'}}>Go !</button>
      </div>
    )
  }
}

export default Login