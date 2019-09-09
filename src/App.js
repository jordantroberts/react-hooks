import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  // Declare a new state variable, which we will call "count":
  const [count, setCount] = useState(0); 

  // Similar to componentDidMount  and componentDidUpdate: 
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click Me</button>
    </div>
  );
}

export default App;
