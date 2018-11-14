// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box, Heading } from 'grommet'

import Avatar from '../Avatar'
import { UserContextConsumer } from '../UserContext'

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <UserContextConsumer>
    { context =>
      <Box
        align='center'
        direction='row'
        justify='center'
        gap='large'
        margin={{top: 'medium'}}
      >
        <Avatar size='xsmall' />
        <Heading level='4' margin='none'>{context.state.name}</Heading>
        <Heading level='4' margin='none'>{context.state.email}</Heading>
      </Box>
    }
  </UserContextConsumer>

export default Body
