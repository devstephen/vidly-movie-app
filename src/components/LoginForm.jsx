import React, { Component } from 'react'
import Input from './common/Input'

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  }
  // username = React.createRef()

  // componentDidMount() {
  //   this.username.current.focus()
  // }
  handleSubmit = (e) => {
    e.preventDefault()

  //   const error = this.validate()
  //   // this.setState({ errors })
  //   // if (error) return
  // }

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
