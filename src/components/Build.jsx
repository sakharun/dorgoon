import React from "react";
import urun from "./images/Үрүҥ Айыы.png";
import tutul from "./images/Таҥара.png";

const Build = () => {
  return (
    <section>
      <div className="centered">
        <h3>Ураһа</h3>
        <img src={tutul} alt="tutul" width={420} />
        <img src={urun} alt="urun" width={420} />
        
      </div>
    </section>
  );
};

export default Build;
