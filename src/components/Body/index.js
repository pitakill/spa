// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box } from 'grommet'

import { DatabaseContext } from '../DatabaseContext'

const Body = (props: BodyProps): React.Element<typeof Box> =>
  <Box
    align='center'
    direction='row'
    justify='center'
    gap='large'
    margin={{top: 'medium'}}
  >
    <DatabaseContext.Consumer>
      { context =>
          <input value={context.state.value} onChange={context.writeData}/>
      }
    </DatabaseContext.Consumer>
  </Box>

export default Body
