import React from "react";
import urun from "./images/Үрүҥ Айыы.png";
import aal from "./images/АалУктаахМас.png";

const Build = () => {
  return (
    <section>
      <div className="centered">
        <h3>Ураһа</h3>
        <img src={urun} alt="urun" width={420} />
        <h3>Орто турууга баар Аан Дойду - Аал Уктаах Маһа</h3>
        <img src={aal} alt="aal" width={420} />
      </div>
    </section>
  );
};

export default Build;
