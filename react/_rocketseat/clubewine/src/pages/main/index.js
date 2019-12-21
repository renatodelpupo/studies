import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await api.get()
    const selecoes = response.data.selecoes

    // Gambiarra para pegar os dados do Object
    Object.keys(selecoes).forEach(function(item) {
      console.log(selecoes[item])
    })

  }

  render() {
    return <h1>Hello Rocketseat</h1>
  }
}