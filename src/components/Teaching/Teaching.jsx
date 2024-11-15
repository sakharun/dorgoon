import React from "react";
import WayToTeach from "../WayToTeach";
import "./Teaching.css";
import { ways } from "../../data";
import run from "../images/run.png";
import under from "../images/PodSoznanie.png";
import over from "../images/SverxSoznanie.png";
import Soznanie from "../images/Soznanie.png";
import NadSoznanie from "../images/NadSoznanie.png";

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
        <li>
          <h3 className="centered">Өй туругуктарын оҥкула</h3>
          <img src={Soznanie} alt="img" width={100} />
          <p>
            Орто турууга баар Аан Дойдуну көрдөрөр ойуу. Күннээҕи олоххо
            Өйдөөн-төйдөөн туттуу бэлиэтэ (Сознание).{" "}
          </p>
          <img src={under} alt="img" width={100} />
          <p>
            Алын турууга баар Дойдуну көрдөрөр ойуу. Өбүгэ Өйө уонна Бэйэҥ билэн
            иҥэриммит Өй бэлиэтэ (ПодСознание).{" "}
          </p>
          <img src={over} alt="img" width={100} />
          <p>
            Үөһэ турууга баар Дойдуну көрдөрөр ойуу. Бу турукка тахсар Аан
            Дойдуга ахсаннаах киһи баар. Дойдулары биир кэлим көрөн үлэлиир,
            ситимниир (СверхСознание).{" "}
          </p>
          <img src={NadSoznanie} alt="img" width={100} />
          <p>
            Бу куйаар бэлиэтэ. Орто туруга баар Аан Дойду олохтооҕо тахсыбат.
            Айыылар үлэлиир таһымнара (НадСознание).{" "}
          </p>
        </li>
      </ul>

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
