import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: null,
      password: null
    }
  }

  render () {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <input type="email" style={{gridRow: '5 / 6'}} onChange={this.setEmail.bind(this)} name="email" placeholder='Email' />
        <input type="password" style={{gridRow: '7 / 8'}} onChange={this.setPassword.bind(this)} name="password" placeholder='Password' />
        <Link to="/signup">I need an account</Link>
        <button onClick={this.login.bind(this)} style={{gridRow: '11 / 12'}}>Go !</button>
      </div>
    )
  }

  login () {
    const { email, password } = this.state
    if (email === 'kozlown@gmail.com' && password === 'coucou') {
      this.props.history.push('/profile')
    }
    else {

    }
  }

  setEmail (e) {
    const email = e.target.value;
    this.setState({
      email
    })
  }

  setPassword (e) {
    const password = e.target.value;
    this.setState({
      password
    })
  }
}

export default Login