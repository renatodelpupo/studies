import React from 'react'
import { WebView } from 'react-native-webview'

const Product = ({ navigation }) => {
  console.log(navigation)
  return <WebView source={{ uri: 'https://duckduckgo.com/' }} />
}

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.nome
})

export default Product