// @flow
import { CHANGE_LOCALE } from './actionTypes'

export const changeLocale = (locale: string) => {
  return { type: CHANGE_LOCALE, locale}
}
