import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App" data-test="component-app">
      <div data-test="counter-display">The counter is currently</div>
      <button data-test="button-increment">Increment counter</button>
    </div>
  )
}

export default App
