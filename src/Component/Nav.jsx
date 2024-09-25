import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const nav = "flex gap-8 justify-center mt-5 text-5xl font-bold";
  const style = (e) => {
    return {
      color: e.isActive ? "tomato" : "",
      border: e.isActive ? "2px solid tomato" : "",
      padding: e.isActive ? "4px" : "",
      borderRadius: e.isActive ? "10px" : "",
    };
  };
  return (
    <>
      <nav className={`${nav}`}>
        <NavLink to="/" style={style}>
          Home
        </NavLink>
        <NavLink to="/User" style={style}>
          User
        </NavLink>
        <NavLink to="/about" style={style}>
          About Us
        </NavLink>
        <NavLink to="/contact" style={style}>
          Contact Us
        </NavLink>
      </nav>
    </>
  );
}
