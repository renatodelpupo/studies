import React, { Fragment } from 'react'
import { FlatList, ScrollView } from "react-native"

import { UserHeader } from './src/Components/UserHeader'
import { FeedPicture } from './src/Components/FeedPicture'

const feed = [
  {
    id: 1,
    name: 'Renato'
  },
  {
    id: 2,
    name: 'Marina'
  }
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={ feed }
        keyExtractor={ item => item.id.toString() }
        renderItem={
          ({ item }) =>
          <Fragment>
            <UserHeader userName={ item.name } />
            <FeedPicture />
          </Fragment>
        }
      />
    </ScrollView>
  )
}

export default App