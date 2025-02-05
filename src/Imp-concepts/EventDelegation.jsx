import React from "react";

const EventDelegation = () => {
  const handleListClick = (event) => {
    if (event.target.tagName === "LI") {
      console.log("Clicked on:", event.target.textContent);
    }
  };

  return (
    <ul onClick={handleListClick} style={{ cursor: "pointer" }}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};

export default EventDelegation;