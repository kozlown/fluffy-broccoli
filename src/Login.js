import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import qs from "qs";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      passwd: null
    };

    document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.login()
      }
    })
  }

  // REQ /AuthSrv?email=dsfdqsf&password=dsqfdsf

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <input
          type="email"
          style={{ gridRow: "5 / 6" }}
          onChange={this.setEmail.bind(this)}
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          style={{ gridRow: "7 / 8" }}
          onChange={this.setPassword.bind(this)}
          name="password"
          placeholder="Password"
        />
        <Link to="/signup">I need an account</Link>
        <button onClick={this.login.bind(this)} style={{ gridRow: "11 / 12" }}>
          Go !
        </button>
      </div>
    );
  }

  async login() {
    const { email, passwd } = this.state;
    const check = await axios.post(
      "http://localhost:8080/formAuth",
      qs.stringify({ email, passwd })
    )
    if (check.data.email) {
      this.props.history.push("/dashboard");
    } else {
      console.error("you send a wrong mdp or mail");
    }
  }

  setEmail(e) {
    const email = e.target.value;
    this.setState({
      email
    });
  }

  setPassword(e) {
    const passwd = e.target.value;
    this.setState({
      passwd
    });
  }
}

export default Login;
