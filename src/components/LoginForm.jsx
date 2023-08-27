import React, { Component } from 'react'
import Input from './common/Input'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  }

  validate = () => {
    const { username, password } = this.state.account

    const errors = {}

    if (username.trim() === '') {
      errors.username = 'Username is required'
    }
    if (password.trim() === '') {
      errors.password = 'Password is required'
    }

    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const errors = this.validate()
    console.log(errors)
    this.setState({ errors })

    if (errors) return
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value

    this.setState({ account })
  }
  render() {
    const { username, password } = this.state.account
    return (
      <div>
        <h1 className='mb-5'>Login </h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={username}
            onChange={this.handleChange}
            label='Username'
          />
          <Input
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
          />

          <button className='btn btn-primary px-4 py-10'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
