import React from "react";

const App = () => {
  const [result, setResult] = React.useState(null);

  function handleAdd() {
    const sum = add(2, 3);
    setResult(sum);
  }

  function add(a, b) {
    return a + b;
  }
  return (
    <div>
      Testing the app
      <button onClick={handleAdd}>Add</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default App;
