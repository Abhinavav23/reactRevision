import React from 'react';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

export const Profile = () => {
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
