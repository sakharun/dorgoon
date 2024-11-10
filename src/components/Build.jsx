import React from "react";
import urun from "./images/Үрүҥ Айыы.png";
import tutul from "./images/Таҥара.png";

const Build = () => {
  return (
    <section>
      <div className="centered">
        <img src={urun} alt="img" width={473} />
        <img src={tutul} alt="img" width={473} />
      </div>
    </section>
  );
};

export default Build;
