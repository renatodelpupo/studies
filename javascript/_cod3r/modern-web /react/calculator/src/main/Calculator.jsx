import { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

const initialState = {
  clearDisplay: false,
  current: 0,
  displayValue: '0',
  operation: null,
  values: [0, 0],
}

export default class Calculator extends Component {
  state = { ...initialState }

  constructor(props) {
    super(props)

    this.addDigit = this.addDigit.bind(this)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
  }

  addDigit(digit) {
    if (digit === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + digit
    this.setState({ displayValue, clearDisplay: false })

    if (digit !== '.') {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values })
    }
  }

  clearMemory() {
    this.setState({ ...initialState })
  }

  setOperation(operation) {
    const calc = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }

    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const currentOperation = this.state.operation

      const values = [...this.state.values]
      values[0] = calc[currentOperation](values[0], values[1])
      values[1] = 0

      this.setState({
        clearDisplay: !equals,
        current: equals ? 0 : 1,
        displayValue: values[0],
        operation: equals ? null : operation,
        values,
      })
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
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
