// @flow
import * as React from 'react'

import type { UserContextShape, UserContextProviderProps, UserContextProviderState } from './types'
import * as firebase from '../../firebase'

export const UserContext = React.createContext<UserContextShape>({
  state: {
    avatar: '',
    email: '',
    loggedIn: false,
    name: '',
  },
  handleLogin: () => {},
  handleLogout: () => {}
})

export class UserContextProvider extends React.Component<UserContextProviderProps, UserContextProviderState> {
  state = {
    avatar: '',
    email: '',
    loggedIn: false,
    name: ''
  }

  componentDidMount(): void {
    firebase
      .auth
      .onAuthStateChanged(user => {
        user
          ? this.setState({
              avatar: user.photoURL,
              email: user.email,
              loggedIn: true,
              name: user.displayName
            })
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

        this.setState({avatar, email, loggedIn: true, name})
      })
      .catch(console.error)
  }

  handleLogout = (): void => {
    firebase
      .auth
      .signOut()
      .then(_ => {
        this.setState({avatar: '', email: '', loggedIn: false, name: ''})
      })
  }

  render(): React.Element<typeof UserContext.Provider> {
    const context = {
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout,
      state: this.state
    }

    return (
      <UserContext.Provider value={context}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export const UserContextConsumer = UserContext.Consumer
