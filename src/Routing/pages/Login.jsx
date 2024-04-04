import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const usernameRef = useRef();
    const navigate = useNavigate();
    const setCookie = (key, value, domain,expireTimeInMin) => {
        const timeInSec = expireTimeInMin*60*1000
        const time = new Date().getTime()+ timeInSec;
        console.log("time", new Date(time.toLocaleString()));
        // document.cookie = `${key}=${value};domain=${domain};expires=${time}`;
        // document.cookie="username=abhinav;expires=+;";
        // document.cookie=`${key}=${value};path=${domain};expires=Thu Apr 04 2024 23:01:36UTC`;


    }

    const loginUser = (e) => {
        e.preventDefault();
        console.log("usernameRef", usernameRef.current.value);
        localStorage.setItem("username", usernameRef.current.value);
        // setCookie("username", usernameRef.current.value, "/myDomain", 10);
        navigate("/home");
    };

  return (
    <form onSubmit={loginUser}>
        <label>username</label>
        <input type="text" name="username" id="username" ref={usernameRef}/>
        <input type="submit" value="login" />
    </form>
  )
}






// {
//     expires: "",
//     path: "",
//     domain: "",

// }

// // req.cookie
// res.cookie()