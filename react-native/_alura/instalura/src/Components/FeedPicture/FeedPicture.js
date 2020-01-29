import React, { Fragment } from 'react'
import { Image, Text } from "react-native"

import styles from './styles'

const FeedPicture = ({ photoDescription, photoUrl }) => {
  return (
    <Fragment>
      <Image
        source = {{ uri: photoUrl }}
        style = { styles.feedPicture }
      />
      <Text>{ photoDescription }</Text>
    </Fragment>
  )
}

export default FeedPicture