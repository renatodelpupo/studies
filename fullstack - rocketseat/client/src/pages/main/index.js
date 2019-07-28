import React, { Component } from 'react'
import api from '../../services/api'

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

  // Se não usar a arrow function perde-se o escopo do this
  enviarFormulario = evento => {
    evento.preventDefault()

    console.log('Enviando formulário')
    console.log(this.state.products[0])

    this.setState({

      products: [
        {
          "_id": "1234",
          "nome": "Caralho",
          "email": "mermao",
          "createdAt": "2019-07-28T18:30:59.556Z",
          "__v": 0
        }
      ]
    })
  }

  render() {

    const { products } = this.state

    return (
      <div>
        <form onSubmit={this.enviarFormulario}>
          <label>Nome</label>
          <input id="nome" type="text" name="nome" />
          <label>E-mail</label>
          <input id="email" type="email" name="email" />
          <button type="submit">Gravar</button>
        </form>
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
