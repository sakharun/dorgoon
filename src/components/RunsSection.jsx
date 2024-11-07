import React, { useState } from "react";
import { runs } from "../dataRuns";
import Button from "./Button/Button";

const arrRun = Object.keys(runs).map((key) =>
  Object.assign([], { [key]: runs[key] })
);

console.log(arrRun);

export default function RunsSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3 className="centered">Руна эбэтэр Урууна Сурук</h3>

      {!contentType && (
        <p>
          Сиһилии билэргэ баттаан көр{" "}
          <span role="img" aria-label="emoji name">
            &#128071;
          </span>
        </p>
      )}
      {contentType && <p className="centered">{runs[contentType]}</p>}

      <Button
        isActive={contentType === "Аар"}
        onClick={() => handleClick("Аар")}
      >
        <img src={require("./images/Аар.png")} alt="Аар" width={20} />
        Ар
      </Button>
      <Button
        isActive={contentType === "Аҕа"}
        onClick={() => handleClick("Аҕа")}
      >
        <img src={require("./images/Аҕа.png")} alt="Аҕа" width={20} />
        Аҕа
      </Button>
      <Button
        isActive={contentType === "Тутул"}
        onClick={() => handleClick("Тутул")}
      >
        <img src={require("./images/Тутул.png")} alt="tu" width={25} />
        Тут
      </Button>
      <Button isActive={contentType === "кү"} onClick={() => handleClick("кү")}>
        <img src={require("./images/кү.png")} alt="кү" width={20} />
        Kү
      </Button>
      <Button isActive={contentType === "an"} onClick={() => handleClick("an")}>
        <img src={require("./images/an.png")} alt="an" width={20} />
        Аан
      </Button>
      <Button isActive={contentType === "Do"} onClick={() => handleClick("Do")}>
        <img src={require("./images/do.png")} alt="do" width={20} />
        Тө/До
      </Button>
      <Button isActive={contentType === "Са"} onClick={() => handleClick("Са")}>
        <img src={require("./images/Ca.png")} alt="run" width={20} />
        Са
      </Button>
      <Button isActive={contentType === "Cy"} onClick={() => handleClick("Cy")}>
        <img src={require("./images/Cy.png")} alt="cy" width={20} />
        Сү
      </Button>
      <Button
        isActive={contentType === "dower"}
        onClick={() => handleClick("dower")}
      >
        <img src={require("./images/dower.png")} alt="dower" width={20} />
        Энньэ
      </Button>
      <Button
        isActive={contentType === "mind"}
        onClick={() => handleClick("mind")}
      >
        <img src={require("./images/өйө.png")} alt="mind" width={30} />
        Өйө
      </Button>
      <Button isActive={contentType === "il"} onClick={() => handleClick("il")}>
        <img src={require("./images/il.png")} alt="il" width={20} />
        Ил
      </Button>
      <Button isActive={contentType === "yn"} onClick={() => handleClick("yn")}>
        <img src={require("./images/yn.png")} alt="yn" width={20} />
        Үүн
      </Button>
      <Button
        isActive={contentType === "sieri"}
        onClick={() => handleClick("sieri")}
      >
        <img src={require("./images/sieri.png")} alt="sieri" width={20} />
        Сиэр/Һэри
      </Button>
      <Button isActive={contentType === "ta"} onClick={() => handleClick("ta")}>
        <img src={require("./images/ta.png")} alt="ta" width={20} />
        Та
      </Button>
      <Button isActive={contentType === "ka"} onClick={() => handleClick("ka")}>
        <img src={require("./images/ka.png")} alt="ka" width={20} />
        Kа/Ха
      </Button>
      <Button isActive={contentType === "ba"} onClick={() => handleClick("ba")}>
        <img src={require("./images/ba.png")} alt="ba" width={20} />
        Ба
      </Button>
      <Button isActive={contentType === "bo"} onClick={() => handleClick("bo")}>
        <img src={require("./images/bo.png")} alt="bo" width={20} />
        Бө
      </Button>
      <Button isActive={contentType === "ab"} onClick={() => handleClick("ab")}>
        <img src={require("./images/ab.png")} alt="ab" width={20} />
        Аб
      </Button>
      <Button isActive={contentType === "yk"} onClick={() => handleClick("yk")}>
        <img src={require("./images/yk.png")} alt="yk" width={20} />
        Үк
      </Button>
      <Button
        isActive={contentType === "uus"}
        onClick={() => handleClick("uus")}
      >
        <img src={require("./images/uus.png")} alt="uus" width={20} />
        Уус
      </Button>
      <Button
        isActive={contentType === "Aiu"}
        onClick={() => handleClick("Aiu")}
      >
        <img src={require("./images/Aiu.png")} alt="Aiu" width={20} />
        Айы
      </Button>
      <Button isActive={contentType === "me"} onClick={() => handleClick("me")}>
        <img src={require("./images/me.png")} alt="me" width={20} />
        Мэ
      </Button>
      <Button
        isActive={contentType === "esti"}
        onClick={() => handleClick("esti")}
      >
        <img src={require("./images/esti.png")} alt="esti" width={20} />
        Эсти
      </Button>
      <Button isActive={contentType === "er"} onClick={() => handleClick("er")}>
        <img src={require("./images/er.png")} alt="er" width={20} />
        Эр
      </Button>
      <Button
        isActive={contentType === "үттү"}
        onClick={() => handleClick("үттү")}
      >
        <img src={require("./images/үттү.png")} alt="үттү" width={20} />
        үттү
      </Button>
      <Button
        isActive={contentType === "өҕө"}
        onClick={() => handleClick("өҕө")}
      >
        <img src={require("./images/өҕө.png")} alt="өҕө" width={20} />
        өҕө/эҕэ
      </Button>
      <Button isActive={contentType === "uk"} onClick={() => handleClick("uk")}>
        <img src={require("./images/uk.png")} alt="uk" width={20} />
        ук
      </Button>
      <Button
        isActive={contentType === "өйдө"}
        onClick={() => handleClick("өйдө")}
      >
        <img src={require("./images/өйдө.png")} alt="өйдө" width={20} />
        өйдө/өй
      </Button>
      <Button
        isActive={contentType === "ини"}
        onClick={() => handleClick("ини")}
      >
        <img src={require("./images/ини.png")} alt="ини" width={20} />
        ини
      </Button>
      <Button
        isActive={contentType === "һыт"}
        onClick={() => handleClick("һыт")}
      >
        <img src={require("./images/һыт.png")} alt="һыт" width={20} />
        һыт/һит
      </Button>
      <Button
        isActive={contentType === "анта"}
        onClick={() => handleClick("анта")}
      >
        <img src={require("./images/анта.png")} alt="анта" width={20} />
        анта
      </Button>
      <Button
        isActive={contentType === "аны"}
        onClick={() => handleClick("аны")}
      >
        <img src={require("./images/аны.png")} alt="аны" width={20} />
        аны
      </Button>
      <Button isActive={contentType === "ыл"} onClick={() => handleClick("ыл")}>
        <img src={require("./images/ыл.png")} alt="ыл" width={20} />
        ыл
      </Button>
      <Button isActive={contentType === "өҥ"} onClick={() => handleClick("өҥ")}>
        <img src={require("./images/өҥ.png")} alt="өҥ" width={20} />
        өҥ
      </Button>
      <Button isActive={contentType === "ох"} onClick={() => handleClick("ох")}>
        <img src={require("./images/ох.png")} alt="ох" width={20} />
        ох
      </Button>

      <Button
        isActive={contentType === "иччи"}
        onClick={() => handleClick("иччи")}
      >
        <img src={require("./images/иччи.png")} alt="иччи" width={20} />
        иччи
      </Button>
      <Button
        isActive={contentType === "аҥна"}
        onClick={() => handleClick("аҥна")}
      >
        <img src={require("./images/аҥна.png")} alt="аҥна" width={20} />
        аҥна
      </Button>
      <Button isActive={contentType === "им"} onClick={() => handleClick("им")}>
        <img src={require("./images/им.png")} alt="им" width={30} />
        им
      </Button>
      <Button isActive={contentType === "дь"} onClick={() => handleClick("дь")}>
        <img src={require("./images/дь.png")} alt="л" width={30} />
        дь
      </Button>
      <Button
        isActive={contentType === "гын"}
        onClick={() => handleClick("гын")}
      >
        <img src={require("./images/гын.png")} alt="л" width={30} />
        гын
      </Button>
      <Button
        isActive={contentType === "дьа"}
        onClick={() => handleClick("дьа")}
      >
        <img src={require("./images/дьа.png")} alt="дьа" width={30} />
        дьа
      </Button>
      <h3 className="centered">Урууна аһаҕас дорҕооноро </h3>

      <Button
        isActive={contentType === "ыаиэ"}
        onClick={() => handleClick("ыаиэ")}
      >
        <img src={require("./images/ыаиэ.png")} alt="ыаиэ" width={20} />
        ыа/иэ
      </Button>
      <Button
        isActive={contentType === "уһаҮһэ"}
        onClick={() => handleClick("уһаҮһэ")}
      >
        <img src={require("./images/уһаҮһэ.png")} alt="уһаҮһэ" width={20} />
        уһа/үһэ
      </Button>
      <Button
        isActive={contentType === "ыһаИһэ"}
        onClick={() => handleClick("ыһаИһэ")}
      >
        <img src={require("./images/ыһаИһэ.png")} alt="ыһаИһэ" width={20} />
        ыһа/иһэ
      </Button>
      <Button isActive={contentType === "уо"} onClick={() => handleClick("уо")}>
        <img src={require("./images/уо.png")} alt="уо" width={20} />
        уо
      </Button>
      <Button isActive={contentType === "үө"} onClick={() => handleClick("үө")}>
        <img src={require("./images/үө.png")} alt="үө" width={20} />
        үө
      </Button>

      <ol>
        <li> </li>
      </ol>
    </section>
  );
}
