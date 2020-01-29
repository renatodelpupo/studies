import React, { Fragment } from 'react'
import { Image, Text, View } from "react-native"

import styles from "./styles"

const UserHeader = ({ userName, userPhoto }) => {
  return (
    <View style={ styles.userHeader }>
      <Image
        source = {{ uri: userPhoto }}
        style = { styles.userPhoto }
      />
      <Text>{ userName }</Text>
    </View>
  )
}

export default UserHeader