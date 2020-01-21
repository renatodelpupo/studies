import React, { Component } from 'react'
import api from '../services/api'

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  }

  state = {
    docs: [],
    docsMeta: [],
    page: 1
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadMore = () => {
    const { page, docsMeta } = this.state

    if (page === docsMeta.pages) return

    this.loadProducts(page++)
  }

  loadProducts = async (page = 1) => {
    const _response = await api.get(`/products?page=${page}`)
    const { docs, ...docsMeta } = _response.data

    this.setState({
      docs: [...this.state.docs, ...docs],
      docsMeta,
      page
    })
  }

  renderItem = ({ item }) => (
    <View style={ styles.productContainer }>
      <Text style={ styles.productName }>{ item.nome }</Text>
      <Text style={ styles.productEmail }>{ item.email }</Text>
      <TouchableOpacity onPress={ () => {} } style={ styles.productButton }>
        <Text style={ styles.productButtonText }>Acessar</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          contentContainerStyle = { styles.list }
          data = { this.state.docs }
          keyExtractor = { item => item._id }
          onEndReached = { this.loadMore }
          onEndReachedThreshold = { 0.1 }
          renderItem = { this.renderItem }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1
  },

  list: {
    padding: 20
  },

  productButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: '#da552f',
    borderWidth: 2,
    height: 42,
    justifyContent: 'center',
    marginTop: 10
  },

  productButtonText: {
    color: '#da552f',
    fontSize: 16,
    fontWeight: 'bold'
  },

  productContainer: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    padding: 20
  },

  productEmail: {
    color: '#999',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 5
  },

  productName: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold'
  }
})