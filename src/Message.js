export default function Message({ count }) {
    return <p>The count is {count % 2 === 0 ? "Even" : "Odd"}.</p>;
  }
  