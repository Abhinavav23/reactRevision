import React, { useCallback, useMemo, useState } from "react";
import { ChildOne } from "./ChildOne";
import { ChildTwo } from "./ChildTwo";
import { ChildThree } from "./ChildThree";

export const Parent = () => {
  const [username, setUsername] = useState("Abhinav");
  const [address, setAddress] = useState("India");
  const [count, setCount] = useState(0);
  //   console.log("rendering Parent");

  const logInParent = useCallback((value) => {
    console.log("value recieved", value);
  }, []);

  const updateCounter = useMemo((type) => {
    console.log("updating count", type);
    console.log("count", count);
    setCount(count+1)
    // if (type === "inc") {
    //   setCount(count + 1);
    // } else {
    //   setCount(count - 1);
    // }
  }, []);

  console.log("updateCounter", updateCounter);

  const userInfo = useMemo(() => {
    console.log("running useMemo");
    return {
      email: "abhinav@mail",
      address,
    };
  }, [address]);

//   console.log("userInfo");

  return (
    <div>
      <h3>Parent: {count}</h3>
      <button onClick={() => setUsername("updated username")}>
        update username
      </button>
      <button onClick={() => setAddress("updated Address")}>
        update address
      </button>
      <ChildOne username={username} />
      <br />
      <ChildTwo userInfo={userInfo} />
      <br />
      <ChildThree logAValue={logInParent} updateCounter={updateCounter} />
      <button onClick={updateCounter}>+</button>
    </div>
  );
};
