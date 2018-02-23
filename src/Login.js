import React from 'react'
import axios from 'axios'
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

  // REQ /AuthSrv?email=dsfdqsf&password=dsqfdsf

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

  async login () {
    const { email, password } = this.state
    const check = axios.post(
      'http://localhost:8080/Covoiturage/formAuth',
      { email, password }
    )
    //console.info(await check)
    if (email === 'kozlown@gmail.com' && password === 'coucou') {
      this.props.history.push('/dashboard')
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