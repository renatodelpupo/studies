import React, { Fragment } from 'react'
import { Image, Text } from "react-native"

import styles from './styles'

const FeedPicture = () => {
  return (
    <Fragment>
      <Image
        source={ require('../../../res/img/alura.jpg') }
        style={ styles.feedPicture }
      />
      <Text>Photo description</Text>
    </Fragment>
  )
}

export default FeedPicture