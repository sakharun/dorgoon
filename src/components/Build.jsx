import React from "react";
import urun from "./images/Үрүҥ Айыы.png";
import tutul from "./images/Таҥара.png";

const Build = () => {
  return (
    <section>
      <div className="centered">
        <img src={urun} alt="img" width={600} />
        <img src={tutul} alt="img" width={700} />
      </div>
    </section>
  );
};

export default Build;
