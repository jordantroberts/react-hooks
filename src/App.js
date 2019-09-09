import React, {useState} from 'react';
import './App.css';

function App() {
  // Declare a new state variable, which we will call "count":
  const [count, setCount] = useState(0); 

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click Me</button>
    </div>
  );
}

export default App;
