// @flow
import { createStore } from 'redux'

import locale from './reducer'

export default createStore(
  locale,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
