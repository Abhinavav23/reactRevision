import React from "react";
import {Link, NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/home">Home</a> */}
          {/* <Link to="/home">Home</Link> */}
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          {/* <Link to="/about">About</Link> */}
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          {/* <a href="/profile">Profile</a> */}
          {/* <Link to="/profile">profile</Link> */}
          <NavLink to="/profile">profile</NavLink>
        </li>
        <li>
          {/* <a href="/cart">Cart</a> */}
          {/* <Link to="/cart">cart</Link> */}
          <NavLink to="/cart">cart</NavLink>
        </li>

        <li>
          {/* <a href="/cart">Cart</a> */}
          {/* <Link to="/cart">cart</Link> */}
          <NavLink to="/user">User</NavLink>
        </li>
        
        <li>
          {/* <a href="/cart">Cart</a> */}
          {/* <Link to="/cart">cart</Link> */}
          <NavLink to="/login">Login</NavLink>
        </li>

      </ul>
    </div>
  );
};
