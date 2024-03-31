import React, { forwardRef, useRef } from 'react'

export const InputRef = forwardRef((props, timeRef) => {
    console.log("Props", props);
    console.log("timeRef", timeRef);
  return (
    <div>
        <label htmlFor='username'>Enter your time</label>
        <input type="text" id='username' ref={timeRef}/>
    </div>
  )
})
