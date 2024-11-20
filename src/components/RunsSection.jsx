import React from "react";
import runs from "../dataRuns1";
import vowels from "../VowelsData";
import Main from "./Main/Main";
import Vowels from "./Main/Vowels";

export default function RunsSection() {
  const ModalElement = runs.map((run) => {
    return (
      <React.Fragment key={run.name}>
        <Main image={run.image} name={run.name} discription={run.discription} />
      </React.Fragment>
    );
  });
  const ModalVowels = vowels.map((vowel) => {
    return (
      <React.Fragment key={vowel.name}>
        <Vowels
          image={vowel.image}
          name={vowel.name}
          discription={vowel.discription}
        />
      </React.Fragment>
    );
  });
  // vowels Урууна аһаҕас дорҕооноро
  return (
    <section>
      <h3 className="centered">Руна эбэтэр Урууна Сурук</h3>
      {runs.image}
      <p>
        Сиһилии билэргэ баттаан көр{" "}
        <span role="img" aria-label="emoji name">
          &#128071;
        </span>
      </p>
      <div>{ModalElement}</div>
      <h4 className="centered">Урууна аһаҕас дорҕооноро</h4>
      <div>{ModalVowels}</div>
    </section>
  );
}
