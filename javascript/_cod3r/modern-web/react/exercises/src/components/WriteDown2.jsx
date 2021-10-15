import { Component } from 'react'

export default class WriteDown2 extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
    }

    this.setText = this.setText.bind(this)
  }

  setText(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    const { text } = this.state

    return (
      <div>
        <h1>Write down! 2</h1>
        <input onChange={this.setText} type="text" value={this.text} />
        <h2>{text}</h2>
      </div>
    )
  }
}
