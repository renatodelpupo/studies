import React, { Component } from 'react'
import api from '../../services/api'

import './style.css'

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
      <div className="table-area">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td><b>{product.nome}</b></td>
                <td>{product.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
