// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box } from 'grommet'

import { UserContextConsumer } from '../UserContext'
import { BodyInfo } from '../BodyInfo'

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <UserContextConsumer>
    { context => {
      return <Box
        align='center'
        direction='row'
        justify='center'
        gap='large'
        margin={{top: 'medium'}}
      >
        <BodyInfo {...context.state}>
          <BodyInfo.Name />
          <BodyInfo.Avatar size='xsmall' />
          <BodyInfo.Email />
        </BodyInfo>
      </Box>}
    }
  </UserContextConsumer>

export default Body
