import React, { useCallback, useRef } from "react";

const useThrottle = (callback, delay) => {
  const lastCall = useRef(0);

  return useCallback((...args) => {
    const now = new Date().getTime();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, delay]);
};

const Throttle = () => {
  const handleClick = useThrottle(() => {
    console.log("Button clicked!");
  }, 2000);

  return <button onClick={handleClick}>Click Fast!</button>;
};

export default Throttle;