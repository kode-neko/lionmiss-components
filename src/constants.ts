import { LMMenuOpt } from "./lib/types";

const WEB_TITLE = "Lion Miss";

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

const userMenu: LMMenuOpt[] = [
  { name: "user.language" },
  {
    name: "user.cart",
    path: ["cart"],
    icon: "shopping-bag",
  },
  { name: "user.config", path: ["config"], icon: "user" },
];

export { WEB_TITLE, mainMenu, userMenu };
