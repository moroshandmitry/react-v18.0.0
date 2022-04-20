import { useId } from "react";

export default function UseIdExample() {
  const id = useId();

  return (
    <div style={{ marginTop: "10px" }}>
      <label htmlFor={id}>useId checkbox</label>
      <input id={id} type="checkbox" name="react" />
    </div>
  );
}
