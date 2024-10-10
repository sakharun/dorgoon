import React from "react";
import WayToTeach from "../WayToTeach";
import "./Teaching.css";
import { ways } from "../../data";
import run from "../images/run.png";

export default function Teaching() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section>
      <h3 className="centered">Тылы дорҕоонунан ырытыы</h3>
      <div className="centered">
        <img src={run} alt="img" width={100} />
      </div>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>

      <button onClick={top} className="scroll">
        ⇧
      </button>
    </section>
  );
}
