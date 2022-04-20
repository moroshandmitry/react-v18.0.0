import { useState } from "react";
import { flushSync } from "react-dom";

export default function FlushSyncExample() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState(0);

  console.log("render FlushSyncExample");

  const handleClickFlushSync = () => {
    flushSync(() => {
      setState((prevState) => prevState + 1);
    });

    flushSync(() => {
      setValue((prevState) => prevState + 1);
    });
  };

  return (
    <div>
      <h3>state - {state}</h3>
      <h3>value - {value}</h3>
      <button onClick={handleClickFlushSync}>FlushSyncExample</button>
    </div>
  );
}
