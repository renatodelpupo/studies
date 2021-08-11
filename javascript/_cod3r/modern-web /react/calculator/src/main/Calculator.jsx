import { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Button label="AC" variant="triple" />
        <Button label="/" variant="operation" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" variant="operation" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" variant="operation" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" variant="operation" />
        <Button label="0" variant="double" />
        <Button label="." />
        <Button label="=" variant="operation" />
      </div>
    )
  }
}
