import React, { memo } from "react";

export const ChildThree = memo(({ logAValue, updateCounter }) => {
  console.log("rendering ChildThree");
  return (
    <>
      <div>ChildThree</div>
      <button onClick={() => logAValue("Some Value")}>log</button>
      <button onClick={() => updateCounter("inc")}>increment</button>
      <button onClick={() => updateCounter("dec")}>decrement</button>
    </>
  );
});
