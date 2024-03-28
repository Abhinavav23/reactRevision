import React, { useState } from 'react';
import { HookExample } from './HookExample';
import "./App.css";

export const App = () => {
    // let name = "Abhinav";
    // const output = useState("Abhinav");
    // console.log("useState output", output);
    const [username, setName] = useState("Abhinav");
    const [email, setEmail] = useState("abhinav@mail");
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    
    const updateName = () => {
        // console.log("before: --", username); //abhinav
        // name = "updated Name";
        setName("updated Name"); // async in nature
        // console.log("after: --", username);
    };

    const updateEmail = () => {
        // name = "updated Name";
        setEmail("newEmail.com"); // async in nature
    };

    const updateBoth = () => {
        setName("updated Name");
        setEmail("newEmail.com"); // async in nature
    };

    const updateByOne = () => {
      setCount(count+1)
    }

    const updateByFive = () => {
      // setCount(count+3); //3
      // setCount(count+1); //4
      // setCount(count+1); //5
      // setCount(count+1); //6
      // setCount(count+1); //7

      setCount((prevValue) => prevValue+8);
      setCount((prevValue) => prevValue+1);
      setCount((prevValue) => prevValue+1);
      setCount((prevValue) => prevValue+1);
      setCount((prevValue) => prevValue+1);
    }

    // console.log("rendering comp....");
  return (
   <div className="App">
    <h3>App</h3>
     {/* <div>username - {username}</div>
     <div>email - {email}</div>
     <button onClick={updateName}>update name</button>
     <button onClick={updateEmail}>update email</button>
     <button onClick={updateBoth}>update both</button>
     <br/>
     <br/>
     <div>count: {count}</div>
     <button onClick={updateByOne}>+1</button>
     <button onClick={updateByFive}>+5</button> */}
     {show && <HookExample/>}
     <br />
     <br />
     <button onClick={() => setShow(!show)}>show/hide</button>
   </div>
  )
}


// this.setState({count: 5}, (updatedState) => {

// })
