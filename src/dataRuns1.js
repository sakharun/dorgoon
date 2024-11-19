import React from "react";
const runs = [
  {
    name: "Ар",
    discription: "Аар - Улахан, киэн түгэҕэ биллибэт киэли (куйаар)",
    image: <img src="/image/Аар.png " alt="Aar" />,
  },
  {
    name: "Аҕа",
    discription:
      "Куйаар ситимин Иллэччи, сүдү элбэх Дойдулары таҥан айааччы, алдьатааччы.Үрүҥү хараны Иллэччи",
    image: <img src="/image/Аҕа.png " alt="Aga" />,
  },
  {
    name: "Тут",
    discription: "Куйаар, Дойду, Киһи сайдарын тутулун көрөдөрөр бэлиэ",
    image: <img src="/image/Тутул.png " alt="tu" width={28} />,
  },
  {
    name: "Kү",
    discription: "Күнтэн киирэр ии, күүс",
    image: <img src="/image/кү.png " alt="кү" />,
  },
  {
    name: "Аан",
    discription: "Аан, үөһэ таһымҥа, туруга тахсар бэлиэ  ",
    image: <img src="/image/an.png " alt="an" />,
  },
  {
    name: "Тө/До",
    discription:
      "Тө, До. Төрүт, Дойду - До ойдута. До - Орто турууга баар Аан Дойду, аҕыс таһымыттан алын таһыма (иитэ-саҕата). До - икки таһымы холбуур ситим. ",
    image: <img src="/image/do.png " alt="do" />,
  },
  {
    name: "Са",
    discription:
      "Саҥа, Сарсыарда - Са Аар Сы арда. Айылҕа чумпуран, тохтоон ылар кэмэ. Дьэгэрэн уларыйыыта",
    image: <img src="/image/Ca.png " alt="Ca" width={25} />,
  },

  {
    name: "Сү",
    discription:
      "Сү - буор кут бэлиэтэ. Сиртэн уу нөҥүө тахсар күүс. Сүллүкүн тахсара - Сүүнү үллүктүүр күн",
    image: <img src="/image/Cy.png " alt="Cy" />,
  },

  {
    name: "Энньэ",
    discription:
      "Энньэ - Ийэ кут бэлиэтэ. Өбүгэ биэрбитэ, кыыс сүктэн барарыгар дьонун көмөтө уонна бэйэтэ оҥорбут мала - саба",
    image: <img src="/image/dower.png " alt="dower" />,
  },
  {
    name: "Өйө",
    discription: "Салгын кут бэлиэтэ",
    image: <img src="/image/өйө.png " alt="өйө" width={25} />,
  },
  {
    name: "Ил",
    discription: "Ил - иилэр, түмэр",
    image: <img src="/image/il.png " alt="il" />,
  },
  {
    name: "Үүн",
    discription: "Үүн, үҥ",
    image: <img src="/image/yn.png " alt="yn" />,
  },
  {
    name: "Сиэр/Һэри",
    discription: "Сиэр - Си иэрэ ",
    image: <img src="/image/sieri.png " alt="sieri" />,
  },
  {
    name: "Та",
    discription: "Таҥара",
    image: <img src="/image/ta.png " alt="ta" />,
  },
  {
    name: "Kа/Ха",
    discription: "Хаа, Халлаан",
    image: <img src="/image/ka.png " alt="ka" />,
  },
  {
    name: "Ба",
    discription: "ба",
    image: <img src="/image/ba.png " alt="ba" />,
  },
  {
    name: "Бө",
    discription: "бө-мин да бө диэтэхпинэ",
    image: <img src="/image/bo.png " alt="bo" />,
  },
  {
    name: "Аб",
    discription: "абылыыр, аптаах",
    image: <img src="/image/ab.png " alt="ab" />,
  },
  {
    name: "Үк",
    discription: "үк",
    image: <img src="/image/yk.png " alt="yk" />,
  },

  {
    name: "Уус",
    discription: "Уус - төрүт-уус, уус-уран, уус тыл, уус киһи, аҕа, ийэ ууһа",
    image: <img src="/image/uus.png " alt="uus" />,
  },
  {
    name: "Иис",
    discription: "Ис турук, ис-искиттэн дьайыы",
    image: <img src="/image/iis.png " alt="iis" />,
  },
  {
    name: "өйдө/өй",
    discription:
      "Билиини илэ-бааччы оҥорон иҥэрэһин уонна бэйэн да билбэккэ оҥоруу. Бу олоххор хааламмыт билиин",
    image: <img src="/image/өйдө.png " alt="өйдө" />,
  },
  {
    name: "Ини",
    discription: "бииргэ төрөбүттэртэн кыралара",
    image: <img src="/image/ини.png " alt="ини" />,
  },
  {
    name: " һыт/һит",
    discription: "һыт",
    image: <img src="/image/һыт.png " alt="һыт" />,
  },
  {
    name: " анта",
    discription: "анта",
    image: <img src="/image/анта.png " alt="анта" />,
  },
  {
    name: "аны",
    discription: "аны",
    image: <img src="/image/аны.png " alt="аны" />,
  },
  {
    name: "ыл",
    discription: "ыл",
    image: <img src="/image/ыл.png " alt="ыл" width={20} />,
  },
  {
    name: "өҥ",
    discription: "өҥ",
    image: <img src="/image/өҥ.png " alt="өҥ" width={20} />,
  },
  {
    name: "ох",
    discription: "ох",
    image: <img src="/image/ох.png " alt="ох" width={20} />,
  },
  {
    name: "ыһаИһэ",
    discription: "ыһа/иһэ",
    image: <img src="/image/ыһаИһэ.png " alt="ыһаИһэ" width={20} />,
  },
  {
    name: "уо",
    discription: "уо",
    image: <img src="/image/уо.png " alt="уо" width={20} />,
  },
  {
    name: "үө",
    discription: "үө",
    image: <img src="/image/үө.png " alt="үө" width={20} />,
  },
  {
    name: "аҥна",
    discription: "аҥна",
    image: <img src="/image/аҥна.png " alt="аҥна" width={20} />,
  },
  {
    name: "уһа Үһэ",
    discription: "уһа Үһэ",
    image: <img src="/image/уһаҮһэ.png " alt="уһаҮһэ" width={20} />,
  },
  {
    name: "дь",
    discription: "дь",
    image: <img src="/image/дь.png " alt="дь" width={30} />,
  },
  {
    name: "дьа",
    discription: "дьа",
    image: <img src="/image/дьа.png " alt="дьа" width={30} />,
  },
  {
    name: "гын",
    discription: "гын",
    image: <img src="/image/гын.png " alt="гын" width={20} />,
  },
  {
    name: "им",
    discription: "им",
    image: <img src="/image/им.png " alt="им" width={30} />,
  },
  {
    name: "иччи",
    discription: "иччи",
    image: <img src="/image/иччи.png " alt="иччиь" width={20} />,
  },
];

export default runs;
