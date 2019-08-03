import React, { Component } from 'react'

import './style.css'

import CustomInput from '../../components/CustomInput'

export default class Criar extends Component {

  // Se não usar a arrow function perde-se o escopo do this
  enviarFormulario = async (evento) => {
    evento.preventDefault()

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value

    console.log(`Cadastrando ${nome}`)

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
        // Atualiza tabela com o banco
        this.props.classeMain.loadProducts()
      })
      .catch(function (err) {
        console.log('Problema com a conexão: ', err)
      })
  }

  deletaUltimo = async () => {

    console.log(`Apagando último`)

    const ultimoLista = this.props.classeMain.state.ultimoLista

    // Apaga o último
    await fetch('http://localhost:3001/api/products/' + ultimoLista, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({})
    })
      .then(() => {
        // Atualiza tabela com o banco
        this.props.classeMain.loadProducts()
      })

  }

  render() {

    return (
      <div>
        <form onSubmit={this.enviarFormulario}>
          <CustomInput label="Nome" id="nome" type="text" name="nome" />
          <CustomInput label="Email" id="email" type="email" name="email" />
          <button type="submit">Gravar</button>
        </form>
        <button type="delete" onClick={this.deletaUltimo}>Deletar último</button>
      </div>
    )
  }
}
