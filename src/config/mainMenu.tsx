import { LMMenuOpt } from "../types";

const mainMenu: LMMenuOpt[] = [
  {
    title: "woman.title",
    path: ["woman"],
    submenu: [
      { title: "woman.tops", path: ["woman", "top"] },
      {
        title: "woman.bottom",
        path: ["woman", "bottom"],
      },
      {
        title: "woman.dress",
        path: ["woman", "dress"],
      },
      {
        title: "woman.overcoat",
        path: ["woman", "overcoat"],
      },
      {
        title: "woman.accesories",
        path: ["woman", "accesories"],
      },
    ],
  },
  {
    title: "man.title",
    path: ["man"],
    submenu: [
      { title: "man.tops", path: ["man", "top"] },
      {
        title: "man.bottom",
        path: ["man", "bottom"],
      },
      { title: "man.robe", path: ["man", "robe"] },
      {
        title: "man.overcoat",
        path: ["man", "overcoat"],
      },
      {
        title: "man.accesories",
        path: ["man", "accesories"],
      },
    ],
  },
  { title: "about-us", path: ["about-us"] },
  { title: "faq", path: ["faq"] },
];

export { mainMenu };
