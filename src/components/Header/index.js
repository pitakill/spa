// @flow
import * as React from 'react'
import type { HeaderProps } from './types'
import { Box, Heading, Menu } from 'grommet'
import { Flag, Login, Logout, User } from 'grommet-icons'
import { FormattedMessage } from 'react-intl'

import Avatar from '../Avatar'

import { UserContextConsumer } from '../UserContext'

const Header = (props: HeaderProps): React.Element<typeof Box> =>
  <UserContextConsumer>
    { context =>
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
              label={context.state.loggedIn ? <Avatar size='30px' /> : <User />}
              items={[
                {
                  label: props.locale === 'en' ? 'es' : 'en',
                  icon: <Flag />,
                  onClick: props.changeLocale
                },
                {
                  label: context.state.loggedIn ? <FormattedMessage id='logout' /> : <FormattedMessage id='login' />,
                  icon: context.state.loggedIn ? <Logout /> : <Login />,
                  onClick: context.state.loggedIn ? context.handleLogout : context.handleLogin
                }
              ]}
            />
          </Box>
      </Box>
    }
  </UserContextConsumer>

export default Header
