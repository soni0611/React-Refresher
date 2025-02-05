import React, { useEffect, useState } from "react";

const Component3 = () => {
  const [count, setCount] = useState(0);

  //ComponentDidMount
  // useEffect(() => {
  //   console.log("one time run");
  // }, []);

  //ComponentDidUpdate
  // useEffect(() => {
  //   console.log("when count update");
  // }, [count]);

  //ComponentwillUnmount
useEffect(()=>{

  const interval=setInterval(()=>{
console.log("Timer Running")
  },1000)

  return ()=>{
    console.log("Timer Cleared")
    clearInterval(interval);
  }
})


  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
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
    </div>
  );
};

export default Component3;
