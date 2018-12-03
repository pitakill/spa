// @flow
import * as React from 'react'

import { database } from '../../firebase'
import { UserContext } from '../UserContext'

export const DatabaseContext = React.createContext()

export class DatabaseContextProvider extends React.Component<{}, void> {
  static contextType = UserContext

  state = {
    value: ''
  }

  async componentDidMount() {
    const snapshot = await database.ref('/test').once('value')
    const v = snapshot.val()
    v && this.setState({value: v.value})
  }

  writeData = ({target: {value}}) => {
    this.setState({value},
      async () => await database.ref('/test').set({value})
    )
  }

  render() {
    const context = {
      state: this.state,
      writeData: this.writeData
    }

    return (
      <DatabaseContext.Provider value={context}>
        {this.props.children}
      </DatabaseContext.Provider>
    )
  }
}
