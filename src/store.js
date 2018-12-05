// @flow
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { locale, user } from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({ locale, user })

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)
