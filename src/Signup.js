import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import _ from 'lodash'

import './Signup.css'

const emailRegexp =
/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

class Signup extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmationPassword: ''
    }
  }

  signup () {
    let newError = false
    if (this.state.firstName.length === 0) {
      this.setState({ firstNameError: 'First name must be filled' })
      newError = true
    }
    if (this.state.lastName.length === 0) {
      this.setState({ lastNameError: 'Last name must be filled' })
      newError = true
    }
    if (this.state.phoneNumber.length === 0) {
      this.setState({ phoneNumberError: 'Phone number must be filled' })
      newError = true
    }
    if (this.state.email.length === 0) {
      this.setState({ emailError: 'Email must be filled' })
      newError = true
    }
    if (this.state.password.length === 0) {
      this.setState({ passwordError: 'Password must be filled' })
      newError = true
    }
    if (this.state.confirmationPassword.length === 0) {
      this.setState({ confirmationPasswordError: 'Password must be filled' })
      newError = true
    }
    if (_.some([
      this.state.firstNameError,
      this.state.lastNameError,
      this.state.phoneNumberError,
      this.state.emailError,
      this.state.passwordError,
      this.state.confirmationPasswordError
    ], err => err && err.length > 0) || newError) {
      console.info('Nope')
    } else {
      console.info('Yup')
    }
  }

  render () {
    const top = 3
    return (
      <div className='Signup'>
        <h1>Signup</h1>
        <FontAwesome
          name='user'
          size='2x'
          style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            gridRow: `${top} / ${top + 1}`
          }}
        />
        <input
          type="text"
          style={{ gridRow: `${top} / ${top + 1}` }}
          onChange={this.setFirstName.bind(this)}
          name="firstname"
          placeholder="First name"
        />
        <div
          className="error"
          style={{
            gridRow: `${top} / ${top + 1}`
          }}
        >{this.state.firstNameError}</div>
        <FontAwesome
          name='users'
          size='2x'
          style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            gridRow: `${top + 1} / ${top + 2}`
          }}
        />
        <input
          type="text"
          style={{ gridRow: `${top + 1} / ${top + 2}` }}
          onChange={this.setLastName.bind(this)}
          name="lastname"
          placeholder="Last name"
        />
        <div
          className="error"
          style={{
            gridRow: `${top + 1} / ${top + 2}`
          }}
        >{this.state.lastNameError}</div>
        <FontAwesome
          name='phone'
          size='2x'
          style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            gridRow: `${top + 2} / ${top + 3}`
          }}
        />
        <input
          type="tel"
          style={{ gridRow: `${top + 2} / ${top + 3}` }}
          onChange={this.setPhoneNumber.bind(this)}
          name="phonenumber"
          placeholder="Phone number"
        />
        <div
          className="error"
          style={{
            gridRow: `${top + 2} / ${top + 3}`
          }}
        >{this.state.phoneNumberError}</div>
        <FontAwesome
          name='envelope'
          size='2x'
          style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            gridRow: `${top + 3} / ${top + 4}`
          }}
        />
        <input
          type="email"
          style={{ gridRow: `${top + 3} / ${top + 4}` }}
          onChange={this.setEmail.bind(this)}
          name="email"
          placeholder="Email"
        />
        <div
          className="error"
          style={{
            gridRow: `${top + 3} / ${top + 4}`
          }}
        >{this.state.emailError}</div>
        <FontAwesome
          name='key'
          size='2x'
          style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            gridRow: `${top + 4} / ${top + 5}`
          }}
        />
        <input
          type="password"
          style={{ gridRow: `${top + 4} / ${top + 5}` }}
          onChange={this.setPassword.bind(this)}
          name="password"
          placeholder="Password"
        />
        <div
          className="error"
          style={{
            gridRow: `${top + 4} / ${top + 5}`
          }}
        >{this.state.passwordError}</div>
        <FontAwesome
          name='lock'
          size='2x'
          style={{
            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
            gridRow: `${top + 5} / ${top + 6}`
          }}
        />
        <input
          type="password"
          style={{ gridRow: `${top + 5} / ${top + 6}` }}
          onChange={this.setConfirmationPassword.bind(this)}
          name="confirmpassword"
          placeholder="Confirm password"
        />
        <div
          className="error"
          style={{
            gridRow: `${top + 5} / ${top + 6}`
          }}
        >{this.state.confirmationPasswordError}</div>
        <button onClick={this.signup.bind(this)} style={{ gridRow: "11 / 12" }}>
          Go !
        </button>
      </div>
    )
  }

  setFirstName(e) {
    const value = e.target.value
    let firstNameError = ''
    if (value.length <= 0) {
      firstNameError = 'First name must be filled'
    }
    this.setState({
      firstName: value,
      firstNameError
    })
  }

  setLastName(e) {
    const value = e.target.value
    let lastNameError = ''
    if (value.length <= 0) {
      lastNameError = 'Last name must be filled'
    }
    this.setState({
      lastName: value,
      lastNameError
    })
  }

  setPhoneNumber(e) {
    const value = e.target.value
    let phoneNumberError = ''
    if (value.length <= 0) {
      phoneNumberError = 'Phone number must be filled'
    } else if (!value.match(/^((\+)33|0)[1-9] ?(\d{2} ?){4}$/)) {
      phoneNumberError = 'Phone number is invalid'
    }
    this.setState({
      phoneNumber: value,
      phoneNumberError
    })
  }

  setEmail(e) {
    const value = e.target.value
    let emailError = ''
    if (value.length <= 0) {
      emailError = 'Email must be filled'
    } else if (!value.match(emailRegexp)) {
      emailError = 'Email is invalid'
    }
    this.setState({
      email: value,
      emailError
    })
  }

  setPassword(e) {
    const value = e.target.value
    let passwordError = ''
    if (value.length < 8 || value.length > 20) {
      passwordError = 'Password must be between 8 and 20 characters'
    }
    this.setState({
      password: value,
      passwordError
    })
  }

  setConfirmationPassword(e) {
    const value = e.target.value
    let confirmationPasswordError = ''
    if (value !== this.state.password) {
      confirmationPasswordError = 'Confirmation password must be same as password'
    }
    this.setState({
      confirmationPassword: value,
      confirmationPasswordError
    })
  }
}

export default Signup
