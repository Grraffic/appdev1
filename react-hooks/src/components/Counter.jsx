import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const prevCount = () => {
    setCount(count - 1);
  };

  const nextCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>Clicked me: {count} times</h1>
        <button onClick={prevCount}>-</button>
        <button onClick={nextCount}>+</button>
      </div>
    </>
  );
};

export default Counter;
