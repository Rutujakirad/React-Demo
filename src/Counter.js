export default function Counter({ count, setCount }) {
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  