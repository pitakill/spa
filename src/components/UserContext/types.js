// @flow
import * as React from 'react'

export type User = {
}
export type UserContextProviderProps = {
  children: React.Element<any>
}
export type UserContextProviderState = {
  avatar: string,
  loggedIn: boolean,
  name: string,
  email: string
}
export type UserContextShape = {
  state: UserContextProviderState,
  handleLogin: Function,
  handleLogout: Function
}
