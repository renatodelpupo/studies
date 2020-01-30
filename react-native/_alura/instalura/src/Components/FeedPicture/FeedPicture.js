import React, { Fragment, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"

import styles from './styles'
import { likePhoto, likesAmountText, setLikeImage } from '../../api/likes'

const FeedPicture = ({ photoDescription, photoLikes, photoUrl }) => {

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(photoLikes)

  const clickLikePhoto = () => {
    const [isLiked, likesAmount] = likePhoto(likes, liked)

    setLiked(isLiked)
    setLikes(likesAmount)
  }

  return (
    <Fragment>
      <Image
        source = {{ uri: photoUrl }}
        style = { styles.feedPicture }
      />
      <Text style={ styles.photoDescription }>{ photoDescription }</Text>
      <View style={ styles.likeWrap }>
        <TouchableOpacity onPress={ clickLikePhoto }>
          <Image
            source  = { setLikeImage(liked) }
            style   = { styles.likeImage }
          />
        </TouchableOpacity>
        <Text>{ likesAmountText(likes) }</Text>
      </View>
    </Fragment>
  )
}

export default FeedPicture