import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)
  const [error, setError] = React.useState(false)

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <div data-test="error-message" className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0
      </div>
      <button
        data-test="button-increment"
        onClick={() => {
          if (error) {
            setError(false)
          }
          setCount(count + 1)
        }}
      >
        Increment counter
      </button>
      <button
        data-test="button-decrement"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          } else {
            setError(true)
          }
        }}
      >
        Decrement counter
      </button>
    </div>
  )
}

export default App
