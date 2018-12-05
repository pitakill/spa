// @flow
import * as React from 'react'
import type { AppProps, AppState } from './App.types'
import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'
import { addLocaleData, IntlProvider } from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_es from 'react-intl/locale-data/es'
import { connect } from 'react-redux'

import Body from './components/Body'
import Header from './components/Header'
import messages_en from './translations/en.json'
import messages_es from './translations/es.json'

addLocaleData([...locale_en, ...locale_es])

const messages = {
  en: messages_en,
  es: messages_es
}

class App extends React.Component<AppProps, AppState> {
  render(): React.Element<typeof Grommet> {
    const { locale } = this.props

    return (
      <Grommet theme={grommet}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Box fill>
            <Header />
            <Body />
          </Box>
        </IntlProvider>
      </Grommet>
    )
  }
}

const mapStateToProps = ({ locale }) => ({ locale })

export default connect(
  mapStateToProps,
  null
)(App)
