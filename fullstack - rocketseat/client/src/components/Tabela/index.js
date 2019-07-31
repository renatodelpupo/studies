import React, { Component } from 'react'

export default class Tabela extends Component {

  render() {

    const { products } = this.props.classeMain.state

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
