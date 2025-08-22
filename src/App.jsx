import React from 'react'

const App = () => {
  async function fetchData() {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();

  return (
    <div>
      <h1>Testing the app</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default App