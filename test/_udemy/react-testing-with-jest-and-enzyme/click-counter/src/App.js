import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="button-increment" onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
    </div>
  )
}

export default App
