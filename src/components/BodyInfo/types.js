// @flow
import * as React from 'react'

export type BodyInfoChildProps = {
  email?: string,
  name?: string,
  size?: string
}

export type BodyInfoProps = {
  avatar: string,
  children: Array<React.Element<any>>,
  email: string,
  loggedIn: boolean,
  name: string,
}
