import React from "react";

const EventBubbling = () => {
  const handleParentClick = () => {
    console.log("Parent div clicked!");
  };

  const handleButtonClick = (event) => {
    console.log("Button clicked!");
    event.stopPropagation(); // Uncomment to stop bubbling
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", background: "lightblue" }}
    >
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default EventBubbling;