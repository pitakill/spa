// @flow
import * as React from 'react'
import { Box, Heading } from 'grommet'

import type {
  BodyAvatarProps,
  BodyInfoProps,
  BodyHOCProps,
  BodyHOCState,
  ComponentShape
} from './types'

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

  getAditionalProps = ({className, ...props}: any = {}) => {
    return {
      'aria-expanded': false,
      className: `uppercase ${className}`,
      ...props
    }
  }

  render() {
    return (
      <UserContextConsumer>
        { context =>
            <Box
              align='center'
              direction='row'
              justify='center'
              gap='large'
              margin={{top: 'medium'}}
            >
              { this.props.render({
                  ...context.state,
                  getAditionalProps: this.getAditionalProps
                })
              }
            </Box>
        }
      </UserContextConsumer>
    )
  }
}

function withBodyInfo (Component: ComponentShape) {
  return class extends React.Component<BodyHOCProps, BodyHOCState> {
    render() {
      return (
        <UserContextConsumer>
          { context =>
              <Component {...context.state} />
          }
        </UserContextConsumer>
      )
    }
  }
}

export {
  BodyInfo,
  withBodyInfo
}
