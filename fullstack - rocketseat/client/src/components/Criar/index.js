import React, { Component } from 'react'

import './style.css'

export default class Criar extends Component {

  render() {

    return (
      <form onSubmit={this.enviarFormulario}>
        <label>Nome</label>
        <input id="nome" type="text" name="nome" />
        <label>Email</label>
        <input id="email" type="email" name="email" />
        <button type="submit">Gravar</button>
      </form>
    )
  }
}
