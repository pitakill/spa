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
    <BodyInfo render={({avatar, email, name, getAditionalProps}) => (
      <>
        <img src={avatar} alt={name}/>
        <p {...getAditionalProps({
          className: 'red',
          id: '489fdasb'
        })}>{name}</p>
        <p {...getAditionalProps()}>{email}</p>
      </>
    )} />
  </Box>

export default Body
