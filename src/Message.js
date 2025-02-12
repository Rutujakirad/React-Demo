import { useCountMessage } from "./useCountMessage";

export default function Message({ count }) {
  const message = useCountMessage(count);

  return <p>{message}</p>;
}
