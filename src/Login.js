import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

class Login extends React.Component {
  render () {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <input type="email" style={{gridRow: '5 / 6'}} name="email" placeholder='Email' />
        <input type="password" style={{gridRow: '7 / 8'}} name="password" placeholder='Password' />
        <Link to="/signup">I need an account</Link>
        <button style={{gridRow: '11 / 12'}}>Go !</button>
      </div>
    )
  }
}

export default Login