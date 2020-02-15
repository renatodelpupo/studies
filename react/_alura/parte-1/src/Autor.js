import React, { Component } from 'react'
import $ from 'jquery'
import InputCustomizado from './componentes/InputCustomizado'
import PubSub from 'pubsub-js'
import TratadorErros from './TratadorErros'

class FormularioAutor extends Component {

  constructor() {
    super()
    this.state = {nome: '', email: '', senha: ''}
    this.enviaForm = this.enviaForm.bind(this)
    this.setNome = this.setNome.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setSenha = this.setSenha.bind(this)
  }

  enviaForm(evento) {
    evento.preventDefault()
    $.ajax({
      url: 'http://localhost:3001/api/products',
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({ nome: this.state.nome, email: this.state.email, senha: this.state.senha }),
      success: (novaListagem) => {
        PubSub.publish('atualiza-lista-autores', novaListagem)
        this.setState({ nome: '', email: '', senha: '' })
      },
      error: (resposta) => {
        resposta.status === 400 ? new TratadorErros().publicaErros(resposta.responseJSON) : null
      },
      beforeSend: () => PubSub.publish("limpa-erros", {})
    })
  }

  setNome(evento) {
    this.setState({nome: evento.target.value})
  }

  setEmail(evento) {
    this.setState({email: evento.target.value})
  }

  setSenha(evento) {
    this.setState({senha: evento.target.value})
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
          <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome" />
          <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email" />
          <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha" />
          <div className="pure-control-group">
            <label></label>
            <button type="submit" className="pure-button pure-button-primary">Gravar</button>
          </div>
        </form>
      </div>
    )
  }
}

class TabelaAutores extends Component {

  render() {
    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.lista.map((autor) => (
              <tr key={autor._id}>
                <td>{autor.nome}</td>
                <td>{autor.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default class AutorBox extends Component {

  constructor() {
    super()
    this.state = { lista: [] }
  }

  getAuthors() {
    fetch('http://localhost:3001/api/products')
      .then((resp) => resp.json())
      .then((data) => this.setState({ lista: data.docs }))
  }

  componentDidMount() {
    this.getAuthors()
    PubSub.subscribe('atualiza-lista-autores', (topico, novaLista) => this.setState({ lista: novaLista }))
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Cadastro de Autores</h1>
        </div>
        <div className="content" id="content">
          <FormularioAutor />
          <TabelaAutores lista={this.state.lista} />
        </div>
      </div>
    )
  }
}