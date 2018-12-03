// @flow
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyBKDLvzhb2QiXuzZ1RlnewH4ic1BLnLiOE",
  authDomain: "realtime-pitakill.firebaseapp.com",
  databaseURL: "https://realtime-pitakill.firebaseio.com",
  projectId: "realtime-pitakill",
  storageBucket: "realtime-pitakill.appspot.com",
  messagingSenderId: "1092227607708"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

export const database = firebase.database()
