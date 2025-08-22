import React from 'react'

const App = () => {
  async function fetchData() {
    try {
      const response = await fetch('/api/data')
      const data = response.notAFunction()   // ❌ wrong: response me yeh method hi nahi hota
      console.log('Fetched data:', data)
    } catch {
      console.error('Some error occurred but I forgot to log it') // ❌ missing error param
    }
  }

  fetchData 
  testFn(); // checking if it detect or not

  return (
    <div>
      <h1>Testing the app</h1>
      <button onClick={fetchData()}>Fetch Data</button> 
      {/* ❌ onClick pe function ko call kar diya directly, isse render time pe hi call hoga */}
    </div>
  )
}

export default App