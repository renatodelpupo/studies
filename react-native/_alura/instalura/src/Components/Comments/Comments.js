import React, { Fragment } from 'react'
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles'

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
      <View style = { styles.addCommentWrap }>
        <TextInput
          placeholder = { "Add a comment..." }
          style = { styles.addComment }
        />
        <TouchableOpacity>
          <Image
            source = { require('../../../res/img/send.png')}
            style = { styles.sendImage }
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Comments