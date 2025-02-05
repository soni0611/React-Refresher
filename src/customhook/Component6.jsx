import React from "react";
import useFetch from "./useFetch"; // Import the custom hook

const Component6 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(data);
  return (
    <div>
      <h1>Custom hook</h1>
    </div>
  );
};

export default Component6;
