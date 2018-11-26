// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box } from 'grommet'

import BodyInfo from '../BodyInfo'

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <Box
    align='center'
    direction='row'
    justify='center'
    gap='large'
    margin={{top: 'medium'}}
  >
    <BodyInfo>
      <BodyInfo.Avatar size='xsmall' />
      <BodyInfo.Name />
      <BodyInfo.Email />
    </BodyInfo>
  </Box>

export default Body
