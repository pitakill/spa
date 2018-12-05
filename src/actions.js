// @flow
import {
  CHANGE_LOCALE,
  USER_LOGIN,
  USER_LOGOUT,
} from './actionTypes'

export const changeLocale = (locale: string) => {
  return { type: CHANGE_LOCALE, locale}
}

export const handleLogin = () => ({ type: USER_LOGIN })

export const handleLogout = () => ({ type: USER_LOGOUT })
