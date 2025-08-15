import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0);
  for (let i = 0; i < 1000000000; i++) {};
  
  return (
    <div>Testing the app</div>
  )
}

export default App