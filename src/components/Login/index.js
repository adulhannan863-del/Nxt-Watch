import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginCard,
  Logo,
  Label,
  Input,
  ShowPasswordContainer,
  Checkbox,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    error: false,
    errorMsg: '',
  }

  onUsernameChange = event => {
    this.setState({
      username: event.target.value,
      error: false,
      errorMsg: '',
    })
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
      error: false,
      errorMsg: '',
    })
  }

  changeShowPassword = event => {
    this.setState({
      showPassword: event.target.checked,
    })
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    if (username === '' || password === '') {
      this.setState({
        error: true,
        errorMsg: 'Username or password is invalid',
      })
      return
    }

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(
        'https://apis.ccbp.in/login',
        options,
      )

      const data = await response.json()

      if (response.ok) {
        Cookies.set('jwt_token', data.jwt_token, {
          expires: 30,
        })

        const {history} = this.props
        history.replace('/')
      } else {
        this.setState({
          error: true,
          errorMsg: data.error_msg,
        })
      }
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: 'Username or password is invalid',
      })
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      error,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LoginCard onSubmit={this.submitForm}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />

          <Label htmlFor="username">USERNAME</Label>

          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.onUsernameChange}
          />

          <Label htmlFor="password">PASSWORD</Label>

          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={this.onPasswordChange}
          />

          <ShowPasswordContainer>
            <Checkbox
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={this.changeShowPassword}
            />

            <label htmlFor="showPassword">
              Show Password
            </label>
          </ShowPasswordContainer>

          <LoginButton type="submit">
            Login
          </LoginButton>

          {error && (
            <ErrorMessage>{errorMsg}</ErrorMessage>
          )}
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login