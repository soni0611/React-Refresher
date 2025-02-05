import React, { useRef } from 'react'

const Component2 = () => {
    const inputRef=useRef(null);
  return (
    <div>
      <input type='text' ref={inputRef} placeholder='type something'></input>
      <button onClick={()=>inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default Component2
