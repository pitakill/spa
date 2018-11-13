// @flow
import * as React from 'react'
import type { AvatarProps } from './types'
import { Box } from 'grommet'

const Avatar = (props: AvatarProps) =>
  <Box
    background={`url(${props.avatar})`}
    height={props.size}
    width={props.size}
  />

export default Avatar
