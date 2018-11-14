// @flow
import * as React from 'react'
import type { AppProps, AppState } from './App.types'
import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'
import { addLocaleData, IntlProvider } from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_es from 'react-intl/locale-data/es'

import Body from './components/Body'
import Header from './components/Header'
import * as firebase from './firebase'
import messages_en from './translations/en.json'
import messages_es from './translations/es.json'

addLocaleData([...locale_en, ...locale_es])

const messages = {
  en: messages_en,
  es: messages_es
}

class App extends React.Component<AppProps, AppState> {
  state = {
    user: {
      avatar: '',
      email: '',
      loggedIn: false,
      name: '',
    },
    locale: 'es'
  }

  componentDidMount(): void {
    firebase
      .auth
      .onAuthStateChanged(user => {
        user
          ? this.setState({user: {
              avatar: user.photoURL,
              email: user.email,
              loggedIn: true,
              name: user.displayName
            }})
          : this.setState()
      })
  }

  changeLocale = () => {
    this.setState({locale: this.state.locale === 'en' ? 'es' : 'en'})
  }

  handleLogin = (): void => {
    firebase
      .auth
      .signInWithPopup(firebase.provider)
      .then(({user}) => {
        const {
          displayName: name,
          email,
          photoURL: avatar
        } = user

        this.setState({user: {avatar, email, loggedIn: true, name}})
      })
      .catch(console.error)
  }

  handleLogout = (): void => {
    firebase
      .auth
      .signOut()
      .then(_ => {
        this.setState({user: {avatar: '', email: '', loggedIn: false, name: ''}})
      })
  }

  render(): React.Element<typeof Grommet> {
    return (
      <Grommet theme={grommet}>
        <IntlProvider locale={this.state.locale} messages={messages[this.state.locale]}>
          <Box fill>
            <Header
              avatar={this.state.user.avatar}
              changeLocale={this.changeLocale}
              locale={this.state.locale}
              logIn={this.handleLogin}
              logOut={this.handleLogout}
              loggedIn={this.state.user.loggedIn}
            />
            <Body user={this.state.user}/>
          </Box>
        </IntlProvider>
      </Grommet>
    )
  }
}

export default App
