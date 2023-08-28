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
      errors.username = 'Please enter username'
    }
    if (password.trim() === '') {
      errors.password = 'Please enter password'
    }

    return Object.keys(errors).length === 0 ? null : errors
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const errors = this.validate()
    this.setState({ errors })

    if (errors) return
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value

    this.setState({ account })
  }
  render() {
    const { account, errors } = this.state
    return (
      <div>
        <h1 className='mb-5'>Login </h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={account.username}
            onChange={this.handleChange}
            label='Username'
            error={errors.username}
          />
          <Input
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            error={errors.password}
          />

          <button className='btn btn-primary px-4 py-10'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
