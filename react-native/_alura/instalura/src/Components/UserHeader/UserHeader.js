import React, { Fragment } from 'react'
import { Image, Text, View } from "react-native"

import styles from "./styles"

const UserHeader = ({ userName }) => {
  return (
    <View style={ styles.userHeader }>
      <Image
        source={ require("../../../res/img/alura.jpg") }
        style={ styles.userPhoto }
      />
      <Text>{ userName }</Text>
    </View>
  )
}

export default UserHeader