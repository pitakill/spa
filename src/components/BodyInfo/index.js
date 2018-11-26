// @flow
import * as React from 'react'
import { Box, Heading } from 'grommet'

import type { BodyInfoChildProps, BodyInfoProps } from './types'

import Avatar from '../Avatar'

const BodyAvatar = (props: BodyInfoChildProps) => {
  const { size = 'xsmall' } = props
  return <Avatar size={size} />
}

const BodyEmail = ({email}: BodyInfoChildProps) =>
  <Heading level='4' margin='none'>{email}</Heading>

const BodyName = ({name}: BodyInfoChildProps) =>
  <Heading level='4' margin='none'>{name}</Heading>

class BodyInfo extends React.Component<BodyInfoProps, void> {
  static Avatar = BodyAvatar
  static Email = BodyEmail
  static Name = BodyName

  render() {
    const { email, name } = this.props

    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, { email, name })
    )

    return (
      <Box
        align='center'
        direction='row'
        justify='center'
        gap='large'
        margin={{top: 'medium'}}
      >
        {children}
      </Box>
    )
  }
}

export {
  BodyInfo,
}
