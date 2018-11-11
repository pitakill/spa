// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box, Heading } from 'grommet'

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <Box
    align='center'
    direction='row'
    justify='center'
    gap='large'
    margin={{top: 'medium'}}
  >
    <Box
      background={`url(${props.user.avatar})`}
      height='xsmall'
      width='xsmall'
    />
    <Heading level='4' margin='none'>{props.user.name}</Heading>
    <Heading level='4' margin='none'>{props.user.email}</Heading>
  </Box>

export default Body
