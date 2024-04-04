import React, { useEffect } from 'react';
import {NavLink, Outlet, Route, Routes, useNavigate} from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // check user login status
        const username = localStorage.getItem("username");
        if(!username){
            navigate("/login");
        }
    }, [])
    console.log("rendering profile");
    
  return (
    <div>
        {/* <Routes>
            <Route path='orders' element={<p>My orders</p>}/>
            <Route path='addresses' element={<p>My addresses</p>}/>
            <Route path='cards' element={<p>My cards</p>}/>
        </Routes> */}

        <h3>Profile</h3>
        <ul>
        <li>
          <NavLink to="orders">My orders</NavLink>
        </li>
        <li>
          <NavLink to="addresses">My addresses</NavLink>
        </li>
        <li>
          <NavLink to="cards">My cards</NavLink>
        </li>
        <Outlet/>
      </ul>
    </div>
  )
}
