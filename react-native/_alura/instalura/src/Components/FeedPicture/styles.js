import { Dimensions, StyleSheet } from "react-native"

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
  feedPicture: {
    width: screenWidth,
    height: screenWidth
  }
})

export default styles