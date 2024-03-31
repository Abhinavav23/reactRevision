import React, { useRef } from "react";

export const RefExample = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const loginUser = (e) => {
        e.preventDefault();
        console.log("username value", userNameRef.current.value);
        console.log("password value", passwordRef.current.value);
    }

  return (
    <form onSubmit={loginUser}>
      <label htmlFor="username">username</label>
      <input type="text" id="username" ref={userNameRef}/>
      <br />
      <label htmlFor="password">password</label>
      <input type="password" id="password" ref={passwordRef}/>
      <br />
      <input type="submit" value="login" />
    </form>
  );
};
