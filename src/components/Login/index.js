// @flow
import React from 'react'
import { Box, Button, FormField, TextInput } from 'grommet'
import { navigate } from '@reach/router'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { email, password } = this.state
    if (email !== '' && password !== '') {
      fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, password
        })
      })
      .then(r => r.json())
      .then(r => {
        window.localStorage.setItem('token', r.token)
        navigate('/')
      })
      .catch(console.error)
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { email, password } = this.state;
    return (
      <Box>
        <form onSubmit={this.handleSubmit}>
          <FormField
            label="Email"
          >
            <TextInput
              onChange={this.handleChange}
              name="email"
              type="email"
              value={email}
              required
            />
          </FormField>
          <FormField
            label="Password"
          >
            <TextInput
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </FormField>
          <Button type="submit" label="Login" primary />
        </form>
      </Box>
    )
  }
}

export default Login
