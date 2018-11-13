// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box, Heading } from 'grommet'

import Avatar from '../Avatar'

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <Box
    align='center'
    direction='row'
    justify='center'
    gap='large'
    margin={{top: 'medium'}}
  >
    <Avatar avatar={props.user.avatar} size='xsmall' />
    <Heading level='4' margin='none'>{props.user.name}</Heading>
    <Heading level='4' margin='none'>{props.user.email}</Heading>
  </Box>

export default Body
