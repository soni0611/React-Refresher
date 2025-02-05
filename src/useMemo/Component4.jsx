import React, { useMemo, useState } from "react";

const Component4 = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  //Normal Scenario
  // function multiply(){
  //     console.log('function called')
  //     return add*2;
  // }

  const multiplication = useMemo(
    function multiply() {
      // console.log("function called"); //commented
      return add * 5;
    },
    [add]
  );

  return (
    <div>
      <h1>{multiplication}</h1>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>add</button>
      <h1>{sub}</h1>
      <button onClick={() => setSub(sub + 1)}>sub</button>
    </div>
  );
};

export default Component4;
