import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0);

  for(let i = 0; i < 1000000; i++) {
    // Simulate some work
  }
  return (
    <div>
      <p>Testing the app</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default App