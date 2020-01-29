import { Dimensions, StyleSheet } from "react-native"

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
  feedPicture: {
    width: screenWidth,
    height: screenWidth
  },

  likeImage: {
    margin: 5,
    height: 40,
    width: 40
  },

  likeWrap: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default styles