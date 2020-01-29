import React, { Fragment, useEffect, useState } from 'react'
import { FlatList, ScrollView } from "react-native"

import { UserHeader } from './src/Components/UserHeader'
import { FeedPicture } from './src/Components/FeedPicture'

const App = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => {
    const readFeed = async() => {
      const feedHttp = await fetch('http://localhost:3030/feed')
      const feedJson = await feedHttp.json()
      setFeed(feedJson)
    }

    readFeed()
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
              photoUrl = { item.url }
            />
          </Fragment>
        }
      />
    </ScrollView>
  )
}

export default App