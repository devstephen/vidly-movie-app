import React, { Component } from 'react'
import Input from './common/Input'
import Joi from 'joi-browser'
import Form from './common/Form'

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = () => {
    // Call the server
    console.log('Submitted')
  }

  render() {
    const { data, errors } = this.state
    return (
      <div>
        <h1 className='mb-5'>Login </h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={data.username}
            onChange={this.handleChange}
            label='Username'
            error={errors.username}
          />
          <Input
            name='password'
            value={data.password}
            onChange={this.handleChange}
            label='Password'
            error={errors.password}
          />

          <button
            disabled={this.validate()}
            className='btn btn-primary px-4 py-10'
          >
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
