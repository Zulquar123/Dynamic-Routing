import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function User() {
  const Style = " border-2 border-black rounded px-2 m-3";
  const linkStyle = "bg-cyan-200 text-3xl hover:bg-cyan-300 rounded ";
  return (
    <div className={`w-1/2 m-auto mt-5`}>
      <h1 className={`${Style}  text-3xl font-bold`}>User</h1>
      <div className="flex flex-col gap-1 w-1/5 ml-5 mt-5 text-center">
        <Link to="/user/zulquar" className={linkStyle}>
          Zulquar
        </Link>
        <Link to="/user/zeeshan" className={linkStyle}>
          Zeeshan
        </Link>
        <Link to="/user/jalal" className={linkStyle}>
          Md Jalal
        </Link>
        <Link to="/user/sahista" className={linkStyle}>
          Sahishta
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
