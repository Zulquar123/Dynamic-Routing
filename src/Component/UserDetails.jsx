import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetails() {
  const Style = " border-2 border-black rounded px-2 m-3";
  const { name } = useParams();
  const goBack = useNavigate();
  const gobackhandle = () => {
    goBack("/user");
  };

  return (
    <div className={`w-1/2 m-auto mt-5`}>
      <h1 className={`${Style} inline text-3xl font-bold`}>Hello {name}</h1>
      <p className={`${Style}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odit
        voluptates? Accusantium ipsum a consequatur tempora itaque soluta dicta
        eius in? Incidunt, rem in! Voluptatum esse delectus officia incidunt
        sit.
      </p>
      <button className={`${Style}`} onClick={gobackhandle}>
        Go Back
      </button>
    </div>
  );
}
