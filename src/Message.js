import { useEffect, useState } from "react";

export default function Message({ count }) {
  const [message, setMessage] = useState("The count is neutral.");

  useEffect(() => {
    setMessage(`The count is ${count % 2 === 0 ? "Even" : "Odd"}.`);
  }, [count]);

  return <p>{message}</p>;
}
