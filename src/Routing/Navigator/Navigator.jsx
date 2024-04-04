import React from 'react';
import {Navigate, useLocation} from "react-router-dom";

export const Navigator = ({children}) => {
    const location = useLocation();
    console.log("location", location);
    const username = localStorage.getItem("username");
    if(!username){
        return <Navigate to="/login" state={{navigatedFrom: ""}}/>
    }else{
        return children
    }
}
