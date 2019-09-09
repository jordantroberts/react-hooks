import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  // Declare a new state variable, which we will call "count":
  const [count, setCount] = useState(0); 
  const [person, setPerson] = useState([]);

  // Similar to componentDidMount  and componentDidUpdate: 
  useEffect(() => {
    getPerson();
  },[]);

  const getPerson = async () => {
    const response = await fetch(
      "https://api.randomuser.me");
      const data = await response.json();
    
      console.log(data.results);
      setPerson(data.results);
  };
  
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => getPerson()}>Click Me</button>
      <div>{person.map(person => person.name.first)}</div>
    </div>
  );
}
// person&& = it will only render if there's a person

export default App;
