import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";
import Contact from "./Contact";
import UserDetails from "./UserDetails";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />}>
          <Route path="/User/:name" element={<UserDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
