import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(15)
  const [message, setMessage] = useState("") // extra state for message

  const addValue = () => {
    if (counter === 20) {
      setMessage("Sorry, you can’t add more values!")
    } else {
      setCounter(counter + 1)
      setMessage("") // remove message if valid action
    }
  }

  const removeValue = () => {
    if (counter === 0) {
      setMessage("You can’t remove anything now!")
    } else {
      setCounter(counter - 1)
      setMessage("")
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      {/* conditional message display */}
      {message && <p style={{ color: "red" }}>{message}</p>}
    </>
  )
}

export default App

// video 6 :virtual DOM ,fiber and reconcillation
// documentation -react fiber github(acdlite merge pull request)
// key features of react fiber
// what is reconcilaition- the algorithm react uses to differentiate on tree with another to determine
//which parts to be changed.

