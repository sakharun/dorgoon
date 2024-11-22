import React from "react";
import Aar from "./components/images/Аар.png";
import Aga from "./components/images/Аҕа.png";
import tu from "./components/images/Тутул.png";
import кү from "./components/images/кү.png";
import an from "./components/images/an.png";
import До from "./components/images/do.png";
import Ca from "./components/images/Ca.png";
import Cy from "./components/images/Cy.png";
import dower from "./components/images/dower.png";
import өйө from "./components/images/өйө.png";
import il from "./components/images/il.png";
import yn from "./components/images/yn.png";
import sieri from "./components/images/sieri.png";
import ta from "./components/images/ta.png";
import ka from "./components/images/ka.png";
import ba from "./components/images/ba.png";
import bo from "./components/images/bo.png";
import ab from "./components/images/ab.png";
import yk from "./components/images/yk.png";
import uus from "./components/images/uus.png";
import iis from "./components/images/iis.png";
import өйдө from "./components/images/өйдө.png";
import ини from "./components/images/ини.png";
import һыт from "./components/images/һыт.png";
import анта from "./components/images/анта.png";
import аны from "./components/images/аны.png";
import ыл from "./components/images/ыл.png";
import өҥ from "./components/images/өҥ.png";
import ох from "./components/images/ох.png";

import аҥна from "./components/images/аҥна.png";

import дь from "./components/images/дь.png";
import дьа from "./components/images/дьа.png";
import гын from "./components/images/гын.png";
import им from "./components/images/им.png";
import иччи from "./components/images/иччи.png";
import Aiu from "./components/images/Aiu.png";
import me from "./components/images/me.png";
import esti from "./components/images/esti.png";
import er from "./components/images/er.png";
import үттү from "./components/images/үттү.png";
import өҕө from "./components/images/өҕө.png";
import uk from "./components/images/uk.png";

const runs = [
  {
    name: "Ар",
    discription: "Аар - Улахан, киэн түгэҕэ биллибэт киэли (куйаар)",
    image: <img src={Aar} alt="Aar" />,
  },
  {
    name: "Аҕа",
    discription:
      "Куйаар ситимин Иллэччи, сүдү элбэх Дойдулары таҥан айааччы, алдьатааччы.Үрүҥү хараны Иллэччи",
    image: <img src={Aga} alt="Aga" />,
  },
  {
    name: "Тут",
    discription: "Куйаар, Дойду, Киһи сайдарын тутулун көрөдөрөр бэлиэ",
    image: <img src={tu} alt="tu" width={28} />,
  },
  {
    name: "Kү",
    discription: "Күнтэн киирэр ии, күүс",
    image: <img src={кү} alt="кү" />,
  },
  {
    name: "Аан",
    discription:
      "Аан, үөһэ таһымҥа, туруга тахсар. Таһыттан киирэри киирбэти дьаһыйар бэлиэ",
    image: <img src={an} alt="an" />,
  },
  {
    name: "Тө/До",
    discription:
      "Тө, До. Төрүт, Дойду - До ойдута. До - Орто турууга баар Аан Дойду, аҕыс таһымыттан алын таһыма (иитэ-саҕата). До - икки таһымы холбуур ситим. ",
    image: <img src={До} alt="do" />,
  },
  {
    name: "Са",
    discription:
      "Саҥа, Сарсыарда - Са Аар Сы арда. Айылҕа чумпуран, тохтоон ылар кэмэ. Дьэгэрэн уларыйыыта",
    image: <img src={Ca} alt="Ca" width={25} />,
  },

  {
    name: "Сү",
    discription:
      "Сү - буор кут бэлиэтэ. Сиртэн уу нөҥүө тахсар күүс. Сүллүкүн тахсара - Сүүнү үллүктүүр күн, сир ыраастанар уонна саҥалыы таҥыллан барар. Бу күн ууну ылан алгыс этэҕин.",
    image: <img src={Cy} alt="Cy" />,
  },

  {
    name: "Энньэ",
    discription:
      "Энньэ - Ийэ кут бэлиэтэ. Өбүгэ биэрбитэ, кыыс сүктэн барарыгар дьонун көмөтө уонна бэйэтэ оҥорбут мала - саба (ол аата бэйэн бу сиргэ оҥорбуккунан Ийэ кутун үөһэ таһымҥа тахсар)",
    image: <img src={dower} alt="dower" />,
  },
  {
    name: "Өйө",
    discription: "Салгын кут бэлиэтэ. өбүгэ муспут өйө (Билиитэ)",
    image: <img src={өйө} alt="өйө" width={25} />,
  },
  {
    name: "Ил",
    discription: "Ил - иилэр, түмэр",
    image: <img src={il} alt="il" />,
  },
  {
    name: "Үүн",
    discription: "Үүн, үҥ, үҥсүү",
    image: <img src={yn} alt="yn" />,
  },
  {
    name: "Сиэр/Һэри",
    discription: "Сиэр - Си иэрэ, сэрии",
    image: <img src={sieri} alt="sieri" />,
  },
  {
    name: "Та",
    discription: "Таҥара",
    image: <img src={ta} alt="ta" />,
  },
  {
    name: "Kа/Ха",
    discription: "Хаа, хахха, хаҕа, халлаан",
    image: <img src={ka} alt="ka" />,
  },
  {
    name: "Ба",
    discription:
      "Суох баар буолбутуттан соһуйуу, чараас эйгэттэ биһиги эйгэбитигэр баар буолу. Баҕа санаа туолуута (материализация)",
    image: <img src={ba} alt="ba" />,
  },
  {
    name: "Бө",
    discription:
      "бө-бөрө, мин да бө диэтэхпинэ(бэйэни көрдөрүү, утары хамсаныы, көмүскэнии, өрө барыы",
    image: <img src={bo} alt="bo" />,
  },
  {
    name: "Аб",
    discription: "абылыыр, аптаах",
    image: <img src={ab} alt="ab" />,
  },
  {
    name: "Үк",
    discription: "үк, үҥ",
    image: <img src={yk} alt="yk" />,
  },

  {
    name: "Уус",
    discription:
      "Уус - төрүт-уус, уус-уран, уус тыл, уус киһи, аҕа, ийэ ууһа. Тас турук, тастан дьайыы",
    image: <img src={uus} alt="uus" />,
  },
  {
    name: "Иис",
    discription: "Ис турук, ис-искиттэн дьайыы",
    image: <img src={iis} alt="iis" />,
  },
  {
    name: "өйдө/өй",
    discription:
      "Билиини илэ-бааччы оҥорон иҥэрэһин уонна бэйэн да билбэккэ оҥоруу. Бу олоххор хааламмыт билиин",
    image: <img src={өйдө} alt="өйдө" />,
  },
  {
    name: "Ини",
    discription: "бииргэ төрөбүттэртэн кыралара",
    image: <img src={ини} alt="ини" />,
  },
  {
    name: " һыт/һит",
    discription: "һыт",
    image: <img src={һыт} alt="һыт" />,
  },
  {
    name: " анта",
    discription: "анта",
    image: <img src={анта} alt="анта" />,
  },
  {
    name: "аны",
    discription: "аны",
    image: <img src={аны} alt="аны" />,
  },
  {
    name: "ыл",
    discription: "ыл",
    image: <img src={ыл} alt="ыл" width={20} />,
  },
  {
    name: "өҥ",
    discription: "өҥ",
    image: <img src={өҥ} alt="өҥ" width={20} />,
  },
  {
    name: "ох",
    discription: "ох",
    image: <img src={ох} alt="ох" width={20} />,
  },

  {
    name: "аҥна",
    discription: "аҥна",
    image: <img src={аҥна} alt="аҥна" width={20} />,
  },

  {
    name: "дь",
    discription: "дь - омуктуу 're' суолтатын көрдөрөр",
    image: <img src={дь} alt="дь" width={30} />,
  },
  {
    name: "дьа",
    discription: "дьа - утары турааччы, хамсатар күүс",
    image: <img src={дьа} alt="дьа" width={30} />,
  },
  {
    name: "гын",
    discription: "гын - тас эйгэҕэ хамсааһын оҥоруу",
    image: <img src={гын} alt="гын" width={20} />,
  },
  {
    name: "им",
    discription: "им",
    image: <img src={им} alt="им" width={30} />,
  },
  {
    name: "иччи",
    discription: "иччи - икки эйгэ бысыһар ыырыгар баар,  күүс- күдэх",
    image: <img src={иччи} alt="иччи" width={20} />,
  },
  {
    name: "Айы",
    discription: "Айар күүстэр",
    image: <img src={Aiu} alt="Aiu" width={20} />,
  },
  {
    name: "мэ",
    discription:
      "мэ - (ыҥырыы, чугаһатыы, сыһыарыы, ылыннарыы, биэрии), мэҥэ, мэҥэһик",
    image: <img src={me} alt="me" width={20} />,
  },
  {
    name: "Эсти",
    discription: "үттү эсти, өрүс эстиитэ, хамсааһын тахсыыта",
    image: <img src={esti} alt="esti" width={20} />,
  },
  {
    name: "Эр",
    discription: "эр киһи, эрдэ (кэм хаамыта)",
    image: <img src={er} alt="er" width={20} />,
  },
  {
    name: "үттү",
    discription:
      "үттү барбыт, үтүктүү, удьуордаһын бэлиэтэ (ойдуу, фрагмент, фрактал)",
    image: <img src={үттү} alt="үттү" width={20} />,
  },
  {
    name: "өҕө/эҕэ",
    discription: "эҕэ - көстүүбэт, ис кистэлэн өттө, тайтарыылаах",
    image: <img src={өҕө} alt="өҕө" width={20} />,
  },
  {
    name: "ук",
    discription: "ук,салҕаа, оҥорон угуу ",
    image: <img src={uk} alt="uk" width={20} />,
  },
];
export default runs;
