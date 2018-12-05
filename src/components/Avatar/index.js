// @flow
import * as React from 'react'
import type { AvatarProps } from './types'
import { Box } from 'grommet'
import { connect } from 'react-redux'

const Avatar = (props: AvatarProps) =>
  <Box
    background={`url(${props.avatar})`}
    height={props.size}
    width={props.size}
  />

const mapStateToProps = ({ user: { avatar } }) => ({ avatar })

export default connect(
  mapStateToProps,
  null
)(Avatar)
