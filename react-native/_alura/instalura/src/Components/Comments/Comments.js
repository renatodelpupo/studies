import React, { useState } from 'react'
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const Comments = ( { photoComments }) => {

  const [allComments, addNewComment] = useState(photoComments)

  const addComment = () => {
    addCommentInput.clear()

    const newComment = {
      date: Date.now(),
      text: addCommentInputText,
      userName: 'natodp'
    }

    addNewComment([...allComments, newComment])
  }

  let addCommentInput
  let addCommentInputText

  return (
    <ScrollView>
      <FlatList
        data          = { allComments }
        keyExtractor  = { (item, index) => index.toString() }
        renderItem    = { ({ item }) =>
          <View style={ styles.comment }>
            <Text style={ styles.userName }>{ item.userName }</Text>
            <Text>{ item.text }</Text>
          </View>
        }
      />
      <View style = { styles.addCommentWrap }>
        <TextInput
          onChangeText = { text => addCommentInputText = text }
          placeholder = { "Add a comment..." }
          ref = { text => addCommentInput = text }
          style = { styles.addComment }
        />
        <TouchableOpacity onPress = { addComment }>
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