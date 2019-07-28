import React, { Component } from 'react'

import './style.css'

export default class Criar extends Component {

  apagarUltimo = () => {
    
  }

  render() {

    return (
      <button className="Apagar" onClick={this.apagarUltimo}>Apagar último</button>
    )
  }
}
