import { Component } from 'react'

export default class WriteDown extends Component {
  state = {
    text: '',
  }

  setText(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    const { text } = this.state

    return (
      <div>
        <h1>Write down!</h1>
        <input onChange={(event) => this.setText(event)} type="text" value={this.text} />
        <h2>{text}</h2>
      </div>
    )
  }
}
