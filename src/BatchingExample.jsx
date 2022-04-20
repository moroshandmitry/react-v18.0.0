import { useState } from "react";

// Batching worked with async code in 18.0.0
// Batching worked without async code in 17.0.2

export default function BatchingExample() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState(0);

  console.log("render BatchingExample");

  const handleClick = () => {
    setTimeout(() => {
      setState((prevState) => prevState + 1);
      setValue((prevState) => prevState + 1);
    }, 300);
  };

  return (
    <div>
      <h3>state - {state}</h3>
      <h3>value - {value}</h3>
      <button onClick={handleClick}>BatchingExample</button>
    </div>
  );
}
