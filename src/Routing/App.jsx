import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Cart } from "./pages/Cart";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { User } from "./pages/User";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path= "/profile/*" element={<Profile />}>
            <Route path='orders' element={<p>My orders</p>}/>
            <Route path='addresses' element={<p>My addresses</p>}/>
            <Route path='cards' element={<p>My cards</p>}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/:userId" element={<User />} />
        <Route
          path="*"
          element={
            <div>
              <h3>Page Not Found!!</h3>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

{
  /* <Route path='/home' component={Home}/> */
}
