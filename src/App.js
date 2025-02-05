import { useState } from "react";
import Component1 from "./useState/Component1";
import Component2 from "./useRef/Component2";
import Component3 from "./useEffect/Component3";

function App() {
  const [showComponent3, setShowComponent3] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Component1 />

      <hr style={{ width: "100%", border: "1px solid black" }} />
      <Component2 />
      <hr style={{ width: "100%", border: "1px solid black" }} />
      {showComponent3 && <Component3 />}
      <br />
      {/* Button to toggle Component3 */}
      <button onClick={() => setShowComponent3(!showComponent3)}>
        Toggle Component 3
      </button>
    </div>
  );
}

export default App;
