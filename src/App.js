// @flow
import * as React from 'react'
import type { AppProps, AppState } from './App.types'
import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'

import Body from './components/Body'
import Header from './components/Header'
import * as firebase from './firebase'

class App extends React.Component<AppProps, AppState> {
  state = {
    user: {
      avatar: '',
      email: '',
      loggedIn: false,
      name: '',
    }
  }

  componentDidMount(): void {
    firebase
      .auth
      .onAuthStateChanged(user => {
        user
          ? this.setState({user: {
              avatar: user.photoURL,
              email: user.email,
              loggedIn: true,
              name: user.displayName
            }})
          : this.setState()
      })
  }

  handleLogin = (): void => {
    firebase
      .auth
      .signInWithPopup(firebase.provider)
      .then(({user}) => {
        const {
          displayName: name,
          email,
          photoURL: avatar
        } = user

        this.setState({user: {avatar, email, loggedIn: true, name}})
      })
      .catch(console.error)
  }

  handleLogout = (): void => {
    firebase
      .auth
      .signOut()
      .then(_ => {
        this.setState({user: {avatar: '', email: '', loggedIn: false, name: ''}})
      })
  }

  render(): React.Element<typeof Grommet> {
    return (
      <Grommet theme={grommet}>
        <Box fill>
          <Header
            logIn={this.handleLogin}
            logOut={this.handleLogout}
            loggedIn={this.state.user.loggedIn}
          />
          <Body user={this.state.user}/>
        </Box>
      </Grommet>
    )
  }
}

export default App
