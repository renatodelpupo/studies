import React, { Fragment } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const feed = [
  {
    id: 1,
    name: 'Renato'
  },
  {
    id: 2,
    name: 'Marina'
  }
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={ feed }
        keyExtractor={ item => item.id.toString() }
        renderItem={
          ({ item }) =>
          <Fragment>
            <Text>{ item.name }</Text>
            <Image
              source={ require('./res/img/alura.jpg') }
              style={ styles.image }
            />
          </Fragment>
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenWidth
  }
})

export default App