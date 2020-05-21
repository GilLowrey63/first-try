import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    { name: "Gil", message: "Let's bone babe." },
    { name: "Court", message: "I would like htat very much!" },
    { name: "Penny", message: "I can't wait to skate again!" },
    { name: "Groot", message: "I am Groot" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}

      <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {/*
      <Tweet name="Penny" message="Let's go skate!" />
      <Tweet name="Gil" message="I love coding." />
      <Tweet name="Court" message="I am getting good at coding!" />
      <Tweet name="Groot" message="I am Groot." />
      */}
    </div>
  );
}

export default App;
