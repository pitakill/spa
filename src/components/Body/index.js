// @flow
import * as React from 'react'
import type { BodyProps } from './types'
import { Box } from 'grommet'

import Card from '../Card'

class Body extends React.Component<BodyProps, BodyState> {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts', {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
    .then(r => r.json())
      .then(({ posts }) => {
        if (posts) this.setState({ posts })
      })
    .catch(console.error)
  }

  render() {
    return (
      <Box
        align='center'
        direction='row'
        justify='center'
        gap='large'
        wrap={true}
        margin={{top: 'medium'}}
      >
      {
        this.state.posts.map(post => <Card key={post._id} {...post}/>)
      }
      </Box>
    )
  }
}

export default Body
