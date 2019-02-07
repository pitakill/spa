// @flow
import * as React from 'react'
import { Box, Text } from 'grommet'

const Card = ({ content, user: { name, lastname } }) =>
  <Box
    align="center"
    background={{color: 'light-2'}}
    pad="large"
    gap="small"
    margin="xsmall"
    >
    <Text>
      { `${name} ${lastname}` }
    </Text>
    <Text>
      { content }
    </Text>
  </Box>

export default Card
