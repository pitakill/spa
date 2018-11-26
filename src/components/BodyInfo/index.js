// @flow
import * as React from 'react'
import { Box, Heading } from 'grommet'

import type { BodyAvatarProps, BodyInfoProps } from './types'

import Avatar from '../Avatar'
import { UserContextConsumer } from '../UserContext'

const BodyAvatar = (props: BodyAvatarProps) => {
  const { size = 'xsmall' } = props
  return <Avatar size={size} />
}

const BodyEmail = () =>
  <UserContextConsumer>
    { context =>
        <Heading level='4' margin='none'>{context.state.email}</Heading>
    }
  </UserContextConsumer>

const BodyName = () =>
  <UserContextConsumer>
    { context =>
        <Heading level='4' margin='none'>{context.state.name}</Heading>
    }
  </UserContextConsumer>

class BodyInfo extends React.Component<BodyInfoProps, void> {
  static Avatar = BodyAvatar
  static Email = BodyEmail
  static Name = BodyName

  render() {
    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child)
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

export default BodyInfo
