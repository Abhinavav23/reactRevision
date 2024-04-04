import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Cart } from "./pages/Cart";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { User } from "./pages/User";
import { Login } from "./pages/Login";
import { Navigator } from "./Navigator/Navigator";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route
          path="/profile/*"
          element={
            <Navigator>
              <Profile />
            </Navigator>
          }
        >
          <Route path="orders" element={<p>My orders</p>} />
          <Route path="addresses" element={<p>My addresses</p>} />
          <Route path="cards" element={<p>My cards</p>} />
        </Route>
        <Route
          path="/cart"
          element={
            <Navigator>
              <Cart />
            </Navigator>
          }
        />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/login" element={<Login />} />
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
