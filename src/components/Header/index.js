// @flow
import * as React from 'react'
import type { HeaderProps } from './types'
import { Box, Heading, Menu } from 'grommet'
import { Flag, Login, Logout, User } from 'grommet-icons'
import { FormattedMessage } from 'react-intl'

import Avatar from '../Avatar'

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
          label={props.loggedIn ? <Avatar avatar={props.avatar} size='30px' /> : <User />}
          items={[
            {
              label: props.locale === 'en' ? 'es' : 'en',
              icon: <Flag />,
              onClick: props.changeLocale
            },
            {
              label: props.loggedIn ? <FormattedMessage id='logout' /> : <FormattedMessage id='login' />,
              icon: props.loggedIn ? <Logout /> : <Login />,
              onClick: props.loggedIn ? props.logOut : props.logIn
            }
          ]}
        />
      </Box>
  </Box>

export default Header
