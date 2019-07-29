import React, { Component } from 'react'

export default class CustomInput extends Component {

  render() {

    return (
      <div>
        <label>{this.props.label}</label>
        <input id={this.props.id} type={this.props.type} name={this.props.name} />
      </div>
    )
  }
}
