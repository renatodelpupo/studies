import React, { Fragment } from 'react'
import { FlatList, ScrollView, Text } from 'react-native'

const Comments = ( { photoComments }) => {
  return (
    <ScrollView>
      <FlatList
        data          = { photoComments }
        keyExtractor  = { (item, index) => index.toString() }
        renderItem    = { ({ item }) =>
          <Fragment>
            <Text>{ item.text }</Text>
          </Fragment>
        }
      />
    </ScrollView>
  )
}

export default Comments