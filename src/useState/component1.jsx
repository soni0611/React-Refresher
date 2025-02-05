import React, { useState } from "react";

const Component1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
      }}
    >
      <div>
        <h1>{count}</h1>
      </div>
      <br />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Component1;
