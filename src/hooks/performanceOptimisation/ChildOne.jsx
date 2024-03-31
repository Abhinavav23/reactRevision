import React, { memo } from "react";

export const ChildOne = memo(({username}) => {
  console.log("rendering ChildOne");
  return (
    <>
        <div>ChildOne</div>
        <div>username - {username}</div>

    </>
  );
});
