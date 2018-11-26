// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box } from 'grommet'

import { BodyInfo, withBodyInfo } from '../BodyInfo'

const Img = withBodyInfo(({name, avatar}) => <img src={avatar} alt={name}></img>)

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <Box
    align='center'
    direction='row'
    justify='center'
    gap='large'
    margin={{top: 'medium'}}
  >
    <BodyInfo>
      <Img />
      <BodyInfo.Avatar size='xsmall' />
      <BodyInfo.Name />
      <BodyInfo.Email />
    </BodyInfo>
  </Box>

export default Body
