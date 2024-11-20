import React from "react";
import ыһаИһэ from "./components/images/ыһаИһэ.png";
import уо from "./components/images/уо.png";
import үө from "./components/images/үө.png";
import уһаҮһэ from "./components/images/уһаҮһэ.png";
import ыаиэ from "./components/images/ыаиэ.png";

const vowels = [
  {
    name: "уһа Үһэ",
    discription: "уһа Үһэ",
    image: <img src={уһаҮһэ} alt="уһаҮһэ" width={20} />,
  },
  {
    name: "ыһаИһэ",
    discription: "ыһа/иһэ",
    image: <img src={ыһаИһэ} alt="ыһаИһэ" width={20} />,
  },
  {
    name: "ыа/иэ",
    discription: "ыа/иэ ",
    image: <img src={ыаиэ} alt="ыаиэ" width={20} />,
  },
  {
    name: "уо",
    discription: "уо",
    image: <img src={уо} alt="уо" width={20} />,
  },
  {
    name: "үө",
    discription: "үө",
    image: <img src={үө} alt="үө" width={20} />,
  },
];
export default vowels;
