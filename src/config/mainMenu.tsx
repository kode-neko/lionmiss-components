import { LMMenuOpt } from "../types";

const mainMenu: LMMenuOpt[] = [
  {
    title: "woman",
    path: ["woman"],
    submenu: [
      { title: "woman", path: ["woman", "top"] },
      {
        title: "bottom",
        path: ["woman", "bottom"],
      },
      {
        title: "dress",
        path: ["woman", "dress"],
      },
      {
        title: "overcoat",
        path: ["woman", "overcoat"],
      },
      {
        title: "accesories",
        path: ["woman", "accesories"],
      },
    ],
  },
  {
    title: "man",
    path: ["man"],
    submenu: [
      { title: "man", path: ["man", "top"] },
      {
        title: "bottom",
        path: ["man", "bottom"],
      },
      { title: "robe", path: ["man", "robe"] },
      {
        title: "overcoat",
        path: ["man", "overcoat"],
      },
      {
        title: "accesories",
        path: ["man", "accesories"],
      },
    ],
  },
  { title: "about us", path: ["about-us"] },
  { title: "faq", path: ["faq"] },
];

export { mainMenu };
