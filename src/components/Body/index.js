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
    <BodyInfo render={({avatar, email, name, aditionalProps}) => (
      <>
        <img src={avatar} alt={name}/>
        <p {...aditionalProps}>{name}</p>
        <p {...aditionalProps}>{email}</p>
      </>
    )} />
  </Box>

export default Body
