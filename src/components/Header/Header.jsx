import React from "react";
// import { useState } from "react";
import run from "./../images/tangra.png";
import "./Header.css";

export default function Header() {
  // const now = new Date();
  // const [now, setNow] = useState(new Date());

  // setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <h3>Саха суруга</h3>
      <img src={run} alt="run" height={40} />
      {/* <span>Саха сирин кэмэ: {now.toLocaleTimeString()}</span> */}
    </header>
  );
}
