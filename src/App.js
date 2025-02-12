import { useState } from "react";
import Counter from "./Counter";
import Message from "./Message";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <Message count={count} />
    </div>
  );
}
