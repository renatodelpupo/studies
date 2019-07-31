import React, { Component } from 'react'
import api from '../../services/api'

import './style.css'

import Criar from '../../components/Criar'
import Tabela from '../../components/Tabela'

export default class Main extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await api.get(`/products`)
    const { docs } = response.data
    this.setState({ products: docs })
  }

  render() {

    return (
      <div>
        <Criar classeMain={this} />
        <Tabela classeMain={this} />
      </div>
    )
  }
}
