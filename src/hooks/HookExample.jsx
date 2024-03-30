import React, { useEffect, useState } from 'react'

export const HookExample = () => {
    const [count, setCount] = useState(0);

    const [username, setUsername] = useState("default")

    console.log("start"); //
    // useEffect(() => {
    //     console.log("running Effect");
    // }); // gets called every time

    // useEffect(() => {
    //     console.log("running only once");
    // }, []) // dependency array

    // useEffect(() => {
    //     console.log("running effect based on count");
    // }, [count, username])

    // useEffect(() => {
    //     console.log("running effect based on username");
    // }, [username])

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => {
    //         console.log("res", res);
    //         return res.json();
    //     })
    //     .then((data) => {
    //         console.log("data", data);
    //     })
    //     .catch((err) => {
    //         console.log("err", err.message);
    //     })
    // },[]);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("running after 2 sec");
        }, 2000)

        const interval = setInterval(() => {
            console.log("asking user to subscribe");
        }, 2000)

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
            console.log("cleanup finished");
        }
    }, [])

    console.log("end");
  return (
    <div>
        <div>HookExample ---- Count : {count}</div>
        <button onClick={() => setCount(count+1)}>+</button>
        <br />
        <div>username: {username}</div>
        <button onClick={() => setUsername("abhinav")}>update username</button>
    </div>
  )
}


// creation
// constructor
// getDerivedStateFromProps
// render
// componentDidMount

// updation
// getDerivedStateFromProps
// shouldComponentUpdate
// getSnapshotBeforeUpdate
// render
// componentDidUpdate

// ummount
// componentWillunMount