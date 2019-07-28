import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)

    const { docs } = response.data

    this.setState({ products: docs })
  }

  render() {

    const { products } = this.state

    return (
      <div>
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.nome}</strong>
            <strong>{product.email}</strong>
          </article>
        ))}
        <hr />
        <h1>Hello Rocketseat</h1>
      </div>
    )
  }
}
