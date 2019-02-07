// @flow
import * as React from 'react'
import type { HeaderProps } from './types'
import { Box, Heading, Menu } from 'grommet'
import { Flag, Login, Logout, User } from 'grommet-icons'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'

import Avatar from '../Avatar'
import { changeLocale, handleLogin, handleLogout } from '../../actions'

const signOut = () => {
  window.localStorage.removeItem('token')
}

const Header = (props: HeaderProps): React.Element<typeof Box> =>
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
    elevation='medium'
  >
      <Heading level='2' margin='none'>
        <FormattedMessage id='app.title' />
      </Heading>
      <Box direction='row' gap='large'>
        <Menu
          label={props.user.loggedIn ? <Avatar size='30px' /> : <User />}
          items={[
            {
              label: props.locale === 'en' ? 'es' : 'en',
              icon: <Flag />,
              onClick: () => {
                const locale = props.locale === 'en' ? 'es' : 'en'
                props.changeLocale(locale)
              }
            },
            {
              label: window.localStorage.getItem('token') ? <FormattedMessage id='logout' /> : <FormattedMessage id='login' />,
              icon: window.localStorage.getItem('token') ? <Logout /> : <Login />,
              onClick: window.localStorage.getItem('token') ? signOut : () => navigate('login')
            }
          ]}
        />
      </Box>
  </Box>

const mapStateToProps = ({ locale, user }) => ({ locale, user })

const mapDispatchToProps = { changeLocale, handleLogin, handleLogout }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
