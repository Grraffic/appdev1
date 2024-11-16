import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Clicked me: {count} times</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
};

export default Counter;
