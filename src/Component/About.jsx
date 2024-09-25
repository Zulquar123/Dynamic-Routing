import React from "react";

export default function About() {
  const Style = " border-2 border-black rounded px-2 m-3";
  return (
    <div className={`w-1/2 m-auto mt-20`}>
      <h1 className={`${Style} inline text-3xl font-bold`}>About Us</h1>
      <p className={`${Style}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, odit
        voluptates? Accusantium ipsum a consequatur tempora itaque soluta dicta
        eius in? Incidunt, rem in! Voluptatum esse delectus officia incidunt
        sit.
      </p>
      <button className={`${Style}`}>Click Me</button>
    </div>
  );
}
