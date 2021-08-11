import { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

export default class Calculator extends Component {
  constructor(props) {
    super(props)

    this.addDigit = this.addDigit.bind(this)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
  }

  addDigit(digit) {}

  clearMemory() {}

  setOperation(operation) {}

  render() {
    return (
      <div className="calculator">
        <Display />
        <Button click={this.clearMemory} label="AC" variant="triple" />
        <Button click={this.setOperation} label="/" variant="operation" />
        <Button click={this.addDigit} label="7" />
        <Button click={this.addDigit} label="8" />
        <Button click={this.addDigit} label="9" />
        <Button click={this.setOperation} label="*" variant="operation" />
        <Button click={this.addDigit} label="4" />
        <Button click={this.addDigit} label="5" />
        <Button click={this.addDigit} label="6" />
        <Button click={this.setOperation} label="-" variant="operation" />
        <Button click={this.addDigit} label="1" />
        <Button click={this.addDigit} label="2" />
        <Button click={this.addDigit} label="3" />
        <Button click={this.setOperation} label="+" variant="operation" />
        <Button click={this.addDigit} label="0" variant="double" />
        <Button click={this.addDigit} label="." />
        <Button click={this.setOperation} label="=" variant="operation" />
      </div>
    )
  }
}
