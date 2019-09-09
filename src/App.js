import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Declare a new state variable, which we will call "count":
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState([]);

  // Similar to componentDidMount  and componentDidUpdate:
  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    const response = await fetch("https://api.randomuser.me");
    const data = await response.json();
    setPerson(data.results);
  };

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => {getPerson(); setCount(count + 1)}}>Click Me</button>
      <div>{person.map(person => person.name.first)}</div>
    </div>
  );
}

export default App;
