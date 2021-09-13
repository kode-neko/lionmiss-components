import { LMMenuOpt } from "../lib/types";

const mainMenu: LMMenuOpt[] = [
  {
    name: "woman.title",
    path: ["woman"],
    opts: [
      { name: "woman.tops", path: ["woman", "top"] },
      {
        name: "woman.bottom",
        path: ["woman", "bottom"],
      },
      {
        name: "woman.dress",
        path: ["woman", "dress"],
      },
      {
        name: "woman.overcoat",
        path: ["woman", "overcoat"],
      },
      {
        name: "woman.accesories",
        path: ["woman", "accesories"],
      },
    ],
  },
  {
    name: "man.title",
    path: ["man"],
    opts: [
      { name: "man.tops", path: ["man", "top"] },
      {
        name: "man.bottom",
        path: ["man", "bottom"],
      },
      { name: "man.robe", path: ["man", "robe"] },
      {
        name: "man.overcoat",
        path: ["man", "overcoat"],
      },
      {
        name: "man.accesories",
        path: ["man", "accesories"],
      },
    ],
  },
  { name: "about-us", path: ["about-us"] },
  { name: "faq", path: ["faq"] },
];

export { mainMenu };
