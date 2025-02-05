import React from "react";
import EventBubbling from "./Imp-concepts/EventBubbling";
import EventDelegation from "./Imp-concepts/EventDelegation";
import Throttle from "./Imp-concepts/Throttle";
import Debounce from "./Imp-concepts/Debounce";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Bubbling</h2>
      <EventBubbling />

      <h2>Event Delegation</h2>
      <EventDelegation />

      <h2>Throttling</h2>
      <Throttle />

      <h2>Debouncing</h2>
      <Debounce />
    </div>
  );
};

export default App;