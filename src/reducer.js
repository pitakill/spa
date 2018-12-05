// @flow
import {
  CHANGE_LOCALE,
  USER_SET
} from './actionTypes'

type StateLocale = string

type StateUser = {
  avatar?: string,
  email?: string,
  loggedIn: boolean,
  name?: string,
}

type ActionLocale = {
  type: string,
  locale: string
}

type ActionUser = {
  type: string,
  data: {
    user: {
      displayName: string,
      email: string,
      photoURL: string
    }
  }
}

export const locale = (state: StateLocale = 'es', action: ActionLocale) => {
  switch(action.type) {
    case CHANGE_LOCALE:
      return action.locale
    default:
      return state
  }
}

export const user = (state: StateUser = { loggedIn: false }, action: ActionUser) => {
  switch(action.type) {
    case USER_SET:
      const {
        displayName: name,
        email,
        photoURL: avatar
      } = action.data.user
      const loggedIn = Boolean(action.data.user.email)
      return { name, email, avatar, loggedIn }
    default:
      return state
  }
}
