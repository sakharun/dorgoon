import React from "react";
import runs1 from "../dataRuns1";
import Main from "./Main/Main";

export default function RunsSection() {
  const ModalElement = runs1.map((run) => {
    return (
      <React.Fragment key={run.name}>
        <Main image={run.image} name={run.name} discription={run.discription} />
      </React.Fragment>
    );
  });
  return (
    <section>
      <h3 className="centered">Руна эбэтэр Урууна Сурук</h3>

      <p>
        Сиһилии билэргэ баттаан көр{" "}
        <span role="img" aria-label="emoji name">
          &#128071;
        </span>
      </p>
      <div>{ModalElement}</div>
    </section>
  );
}
