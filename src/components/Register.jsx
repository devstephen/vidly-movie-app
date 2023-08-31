import React, { Component } from 'react'
import Joi from 'joi-browser'
import Form from './common/Form'
class Register extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username').email(),
    password: Joi.string().required().label('Password').min(6),
    name: Joi.string().required().label('Name'),
  }

  doSubmit = () => {
    // Call the server
    console.log('Submitted')
  }
  render() {
    return (
      <div>
        <h1 className='mb-5'>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    )
  }
}

export default Register
