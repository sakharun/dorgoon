import React from "react";
import run from "./../images/tangra.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h3>Саха суруга</h3>
      <img src={run} alt="run" height={40} />
    </header>
  );
}
