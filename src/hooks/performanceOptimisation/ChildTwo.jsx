import React, { memo } from "react";

export const ChildTwo = memo(({ userInfo }) => {
  console.log("rendering ChildTwo");
  return (
    <>
      <div>ChildTwo</div>
      <div>address - {userInfo.address}</div>
      <div>email - {userInfo.email}</div>
    </>
  );
});
