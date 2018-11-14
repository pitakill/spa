// @flow
import * as React from 'react'
import type { AvatarProps } from './types'
import { Box } from 'grommet'

import { UserContextConsumer } from '../UserContext'

const Avatar = (props: AvatarProps) =>
  <UserContextConsumer>
    { context =>
      <Box
        background={`url(${context.state.avatar})`}
        height={props.size}
        width={props.size}
      />
    }
  </UserContextConsumer>

export default Avatar
