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
  enviarFormulario = async (evento) => {
    evento.preventDefault()

    console.log('Enviando formulário')

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value

    console.log(nome, email)

    // Atualiza o banco
    await fetch('http://localhost:3001/api/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    })
      .then(() => {
        // Pega o banco novo
        this.loadProducts()
      })
      .catch(function (err) {
        console.log('Problema com a conexão: ', err)
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
