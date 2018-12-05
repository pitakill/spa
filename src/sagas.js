import {
  call,
  takeLatest,
  fork,
  put,
  take,
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import {
  USER_SET,
  USER_SET_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
} from './actionTypes'

import { auth, provider } from './firebase'

function* userLogin() {
  try {
    const data = yield call([auth, auth.signInWithPopup], provider)
    yield put({ type: USER_SET, data })
  } catch (error) {
    yield put({ type: USER_SET_ERROR, error })
  }
}

function channel() {
  const channel = eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error }),
    )

    return unsubscribe
  })

  return channel
}

function* userLoggedIn() {
  const channelUser = yield call(channel)

  while(true) {
    try {
      let data = yield take(channelUser)
      if (!data.user) {
        data = {
          user: {
            displayName: '',
            email: '',
            loggedIn: false,
            photoURL: ''
          }
        }
      }
      yield put({ type: USER_SET, data })
    } catch (error) {
      yield put({ type: USER_SET_ERROR, error })
    }
  }
}

function* userLogout() {
  try {
    yield call([auth, auth.signOut])
    const data = { user: { displayName: '', email: '', photoURL: '' } }
    yield put({ type: USER_SET, data })
  } catch (error) {
    yield put({ type: USER_SET_ERROR, error })
  }
}

export default function* () {
  yield takeLatest(USER_LOGIN, userLogin)
  yield takeLatest(USER_LOGOUT, userLogout)
  yield fork(userLoggedIn)
}
