import {
  useState,
  useTransition
  // useDeferredValue
} from "react";

const fakeArrayItems = new Array(777)
  .fill("")
  .map((_, index) => `Item ${index}`);

export default function ConcurrentExample() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");
  // const deferredValue = useDeferredValue(value, { timeoutMs: 2000 });

  const filtredItems = fakeArrayItems.filter(
    (item) => item.toLowerCase().includes(value) // deferredValue
  );

  console.log("render ConcurrentExample");

  const handleChangeInput = (event) => {
    startTransition(() => {
      setValue(event.target.value);
    });
  };

  // const handleChangeInput = ({ target }) => setValue(target.value);

  return (
    <div style={{ marginTop: "10px" }}>
      {/* <h3>deferredValue - {deferredValue}</h3> */}
      <h3>Find result after last change - {value}</h3>
      <input type="text" onChange={handleChangeInput} />
      {isPending && <h3>Preparation of elements for old CPU...</h3>}
      <ul>
        {filtredItems.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
