import React, { useState, useEffect } from 'react'

/* The code provided below is just an example. Delete the body of App function after you understand how it works. */
/* Please run the backend first and open 'http://127.0.0.1:5000/api' to view all the apis. */

function App () {
  const [message, setCurrentMessage] = useState('')

  useEffect(() => {
    // fetch a response from '/api/demo', then convert it to a json,
    // then extract the vaule with key 'message' in the json and set it to the variable message
    fetch('api/demo')
      .then((res) => res.json())
      .then((data) => {
        setCurrentMessage(data.message)
        console.log(data.message)
      })
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
