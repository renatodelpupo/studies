import React, { Component } from 'react'
import api from '../../services/api'

import Tabela from '../../components/Tabela'

export default class Main extends Component {

  state = {
    products: [],
    ultimoLista: undefined
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await api.get(`/products`)
    const { docs } = response.data
    this.setState({
      products: docs,
      ultimoLista: response.data.docs[response.data.docs.length - 1]._id
    })
  }

  render() {

    return (
      <div>
        <Tabela classeMain={this} />
      </div>
    )
  }
}
