import { useEffect, useState } from "react";

export function useCountMessage(count) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`The count is ${count % 2 === 0 ? "Even" : "Odd"}.`);
  }, [count]);

  return message;
}
