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
import messages_en from './translations/en.json'
import messages_es from './translations/es.json'

import { UserContextProvider } from './components/UserContext'

addLocaleData([...locale_en, ...locale_es])

const messages = {
  en: messages_en,
  es: messages_es
}

class App extends React.Component<AppProps, AppState> {
  state = {
    locale: 'es'
  }

  changeLocale = () => {
    this.setState({locale: this.state.locale === 'en' ? 'es' : 'en'})
  }

  render(): React.Element<typeof Grommet> {
    return (
      <UserContextProvider>
        <Grommet theme={grommet}>
          <IntlProvider locale={this.state.locale} messages={messages[this.state.locale]}>
            <Box fill>
              <Header
                changeLocale={this.changeLocale}
                locale={this.state.locale}
              />
              <Body />
            </Box>
          </IntlProvider>
        </Grommet>
      </UserContextProvider>
    )
  }
}

export default App
