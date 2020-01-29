import React, { Fragment, useEffect, useState } from 'react'
import { FlatList, ScrollView } from "react-native"

import readFeed from './src/api/feed'

import { UserHeader } from './src/Components/UserHeader'
import { FeedPicture } from './src/Components/FeedPicture'

const App = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    readFeed(setFeed)
  }, [])

  return (
    <ScrollView>
      <FlatList
        data={ feed }
        keyExtractor={ item => item.id.toString() }
        renderItem={
          ({ item }) =>
          <Fragment>
            <UserHeader
              userName = { item.userName }
              userPhoto = { item.userURL }
            />
            <FeedPicture
              photoDescription = { item.description }
              photoLikes = { item.likes }
              photoUrl = { item.url }
            />
          </Fragment>
        }
      />
    </ScrollView>
  )
}

export default App