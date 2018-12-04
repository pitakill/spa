// @flow
import { CHANGE_LOCALE } from './actionTypes'

export default (state: string = 'es', action: {type: string, locale: string}) => {
  switch(action.type) {
    case CHANGE_LOCALE:
      return action.locale
    default:
      return state
  }
}
