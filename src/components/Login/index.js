import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showError: false,
  }

  changeInput = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    const apiKey = '970d698cc21f18d0759bec348ed6e217'

    Cookies.set('request_token', apiKey, {expires: 30})

    history.replace('/profiles')
  }

  onFailureLogin = errorMessage => {
    this.setState({errorMessage, showError: true})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const apiKey = '970d698cc21f18d0759bec348ed6e217'

    const requestTokenResponse = await fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    )

    const token = await requestTokenResponse.json()

    const userDetails = {username, password, request_token: token.request_token}

    const url = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }

    const response = await fetch(url, options)
    // const data = await response.json()
    if (response.ok) {
      this.onSuccessLogin()
      //   console.log(data)
    } else {
      this.onFailureLogin('Please enter a valid Email & Password')
      //   console.log(data)
    }
  }

  render() {
    const {errorMessage, showError} = this.state
    const jwtToken = Cookies.get('request_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    console.log(errorMessage, showError)

    return (
      <div className="movies-app-main-container">
        <div className="logo-container">
          <img
            className="movies-logo"
            src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630941228/Group_7399_gvhjyc.png"
            alt="logo"
          />
        </div>

        <form
          type="submit"
          className="form-container"
          onSubmit={this.submitForm}
        >
          <h1 className="login-heading">Sign In</h1>
          <div className="input-container">
            <label className="label" htmlFor="uname">
              USERNAME
            </label>
            <input
              className="input-field"
              id="uname"
              type="text"
              onChange={this.changeInput}
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input-field"
              id="password"
              type="password"
              onChange={this.changePassword}
            />
          </div>
          {showError ? <p className="error-message">{errorMessage}</p> : 'null'}
          <button className="sign-btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default Login
