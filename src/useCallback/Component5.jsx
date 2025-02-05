import React, { useCallback, useState } from 'react'
import Child from './Child'

const Component5 = () => {
    const [add,setAdd]=useState(0)
    // const learning=()=>{
        
    //     //some operation
    // }

    const learning=useCallback(()=>{
        //some operation
    },[])
  return (
    <div>
      <Child learning={learning}/>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Increment</button>
    </div>
  )
}

export default Component5
