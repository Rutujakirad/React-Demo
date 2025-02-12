import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
