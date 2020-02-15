import React, { Component } from 'react'
import $ from 'jquery'
import InputCustomizado from './componentes/InputCustomizado'
import PubSub from 'pubsub-js'
import TratadorErros from './TratadorErros'

class FormularioLivro extends Component {

  constructor() {
    super()
    this.state = { titulo: '', preco: '', autorId: '' }
    this.setTitulo = this.setTitulo.bind(this)
    this.setPreco = this.setPreco.bind(this)
    this.setAutorId = this.setAutorId.bind(this)
    this.handleLivroSubmit = this.handleLivroSubmit.bind(this)
  }

  setTitulo(e) {
    this.setState({ titulo: e.target.value })
  }

  setPreco(e) {
    this.setState({ preco: e.target.value })
  }

  setAutorId(e) {
    this.setState({ autorId: e.target.value })
  }

  handleLivroSubmit(e) {
    e.preventDefault()
    const titulo = this.state.titulo.trim()
    const preco = this.state.preco.trim()
    const autorId = this.state.autorId

    $.ajax({
      url: 'http://localhost:8080/api/livros',
      contentType: 'application/json',
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify({ titulo: titulo, preco: preco, autorId: autorId }),
      success: (novaListagem) => {
        PubSub.publish('atualiza-lista-livros', novaListagem)
        this.setState({ titulo: '', preco: '', autorId: '' })
      },
      error: (resposta) => resposta.status === 400 ? new TratadorErros().publicaErros(resposta.responseJSON) : null,
      beforeSend: () => PubSub.publish("limpa-erros", {})
    })

    this.setState({ titulo: '', preco: '', autorId: '' })
  }

  render() {
    const autores = this.props.autores.map(autor => <option key={autor.id} value={autor.id}>{autor.nome}</option>)

    return (
      <div className="autorForm">
        <form className="pure-form pure-form-aligned" onSubmit={this.handleLivroSubmit}>
          <InputCustomizado id="titulo" name="titulo" label="Titulo: " type="text" value={this.state.titulo} placeholder="Titulo do livro" onChange={this.setTitulo} />
          <InputCustomizado id="preco" name="preco" label="Preco: " type="decimal" value={this.state.preco} placeholder="Preço do livro" onChange={this.setPreco} />
          <div className="pure-controls">
            <select value={this.state.autorId} name="autorId" onChange={this.setAutorId}>
              <option value="">Selecione</option>
              {autores}
            </select>
          </div>
          <div className="pure-control-group">
            <label></label>
            <button type="submit" className="pure-button pure-button-primary">Gravar</button>
          </div>
        </form>
      </div>
    )
  }
}

class TabelaLivros extends Component {

  render() {
    const livros = this.props.lista.map(livro => (
      <tr key={livro.titulo}>
        <td>{livro.titulo}</td>
        <td>{livro.autor.nome}</td>
        <td>{livro.preco}</td>
      </tr>
    ))

    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {livros}
        </tbody>
      </table>
    )
  }
}

export default class LivroBox extends Component {

  constructor(props) {
    super(props)
    this.state = { lista: [], autores: [] }
  }

  getAuthors() {
    fetch('http://localhost:3001/api/products')
      .then((resp) => resp.json())
      .then((data) => this.setState({ autores: data.docs }))
  }

  getBooks() {
    fetch('https://cdc-react.herokuapp.com/api/livros')
      .then((resp) => resp.json())
      .then((lista) => this.setState({ lista }))
  }

  componentDidMount() {
    this.getAuthors()
    this.getBooks()
    PubSub.subscribe('atualiza-lista-livros', (topicName, lista) => this.setState({ lista }))
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Cadastro de Livros</h1>
        </div>
        <div className="content" id="content">
          <FormularioLivro autores={this.state.autores} />
          <TabelaLivros lista={this.state.lista} />
        </div>
      </div>
    )
  }
}