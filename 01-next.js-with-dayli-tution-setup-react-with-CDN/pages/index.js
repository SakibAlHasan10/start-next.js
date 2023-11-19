import { useState } from "react";
export default function Homepages() {
  const [first, setFirst] = useState(0);
  return (
    <div>
      <h1>Like:{first}</h1>
      <button onClick={() => setFirst(first + 1)}>like</button>
    </div>
  );
}
