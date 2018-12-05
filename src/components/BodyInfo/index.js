// @flow
import * as React from 'react'
import { Box, Heading } from 'grommet'
import { connect } from 'react-redux'

import type {
  BodyAvatarProps,
  BodyInfoProps,
  BodyHOCProps,
  BodyHOCState,
  ComponentShape
} from './types'

import Avatar from '../Avatar'

const BodyAvatar = (props: BodyAvatarProps) =>
  <Avatar {...{props}} />

const BodyEmail = ({ email }) =>
  <Heading level='4' margin='none'>{email}</Heading>

const BodyName = ({ name }) =>
  <Heading level='4' margin='none'>{name}</Heading>

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
    const { render, ...props } = this.props
    return (
      <Box
        align='center'
        direction='row'
        justify='center'
        gap='large'
        margin={{top: 'medium'}}
      >
        { render({
            ...props,
            getAditionalProps: this.getAditionalProps
          })
        }
      </Box>
    )
  }
}

function withBodyInfo (Component: ComponentShape, props: {}) {
  return class extends React.Component<BodyHOCProps, BodyHOCState> {
    render() {
      return <Component {...props} />
    }
  }
}

export {
  withBodyInfo
}

const mapStateToProps = ({ user }) => ({ ...user })

export default connect(
  mapStateToProps
)(BodyInfo)
