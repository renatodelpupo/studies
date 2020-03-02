import React, { Component } from 'react'

import './style.css'

export default class Apagar extends Component {

  apagarUltimo = async () => {
    
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
      <button type="delete" className="Apagar" onClick={this.apagarUltimo}>Apagar último</button>
    )
  }
}
