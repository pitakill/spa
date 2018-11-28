// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box } from 'grommet'

import { BodyInfo } from '../BodyInfo'

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <Box
    align='center'
    direction='row'
    justify='center'
    gap='large'
    margin={{top: 'medium'}}
  >
    <BodyInfo render={({avatar, email, name}) => (
      <>
        <img src={avatar} alt={name}/>
        <p>{name}</p>
        <p>{email}</p>
      </>
    )} />
  </Box>

export default Body
