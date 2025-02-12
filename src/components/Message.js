import React from "react";
import { useSelector } from "react-redux";

export default function Message() {
  const count = useSelector((state) => state.count);

  return <p>Current Count: {count} - {count % 2 === 0 ? "Even" : "Odd"}</p>;
}
