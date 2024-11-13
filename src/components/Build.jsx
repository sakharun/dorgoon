import React from "react";
import urun from "./images/Үрүҥ Айыы.png";
import tutul from "./images/Таҥара.png";

const Build = () => {
  return (
    <section>
      <div className="centered">
        <img src={urun} alt="urun" width={420} />
        <img src={tutul} alt="tutul" width={420} />
      </div>
    </section>
  );
};

export default Build;
