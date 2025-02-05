import  Component1  from "./useState/component1";
import  Component2  from "./useRef/component2";
import Component3 from "./useEffect/Component3";
import { useState } from "react";

function App() {
  const [showComponent3, setShowComponent3] = useState(true);
  return (
    <div className="App">
   <Component1/>
   <hr></hr>
   <Component2/>
   <hr></hr>
   {showComponent3 && <Component3 />}
      
      {/* Button to toggle Component3 */}
      <button onClick={() => setShowComponent3(!showComponent3)}>
        Toggle Component 3
      </button>
    </div>
  );
}

export default App;
