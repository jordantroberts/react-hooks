import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Declare a new state variable, which we will call "count":
  const [count, setCount] = useState(1);
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
      <h1>Random Person Generator</h1>
      <p>You have generated {count} times</p>
      <button
        onClick={() => {
          getPerson().then(() => setCount(count + 1));
        }}
      >
        Generate Random Name
      </button>
      <p>
        <div>Name: {person.map(person => person.name.first)}</div>
        <div>Gender: {person.map(person => person.gender)}</div>
      </p>
    </div>
  );
}

export default App;
