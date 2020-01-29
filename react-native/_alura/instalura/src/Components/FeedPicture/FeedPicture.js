import React, { Fragment, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"

import styles from './styles'

const FeedPicture = ({ photoDescription, photoLikes, photoUrl }) => {

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(photoLikes)

  const likePhoto = () => {
    let likesAmount = likes
    liked ? likesAmount-- : likesAmount++

    setLikes(likesAmount)
    setLiked(!liked)
  }

  return (
    <Fragment>
      <Image
        source = {{ uri: photoUrl }}
        style = { styles.feedPicture }
      />
      <Text>{ photoDescription }</Text>
      <View style={ styles.likeWrap }>
        <TouchableOpacity onPress={ likePhoto }>
          <Image
            source  = { setLikeImage(liked) }
            style   = { styles.likeImage }
          />
        </TouchableOpacity>
        <Text>Likes: { likes }</Text>
      </View>
    </Fragment>
  )
}

const setLikeImage = (liked) => {
  return liked
    ? require('../../../res/img/s2-checked.png')
    : require('../../../res/img/s2.png')
}

export default FeedPicture