import React from 'react'

const App = () => {
  console.log('App component rendered');
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Error fetching data:', error));
  return (
    <div>Testing the app</div>
  )
}

export default App