import { LMMenuOpt } from "../../types";

const mainMenu: LMMenuOpt[] = [
  {
    id: "woman",
    title: "woman",
    path: ["woman"],
    submenu: [
      { 
        id: "woman", 
        title: "woman", 
        path: ["woman", "top"] 
      },
      {
        id: "bottom",
        title: "bottom",
        path: ["woman", "bottom"],
      },
      {
        id: "dress",
        title: "dress",
        path: ["woman", "dress"],
      },
      {
        id: "overcoat",
        title: "overcoat",
        path: ["woman", "overcoat"],
      },
      {
        id: "accesories",
        title: "accesories",
        path: ["woman", "accesories"],
      },
    ],
  },
  {
    id: "man",
    title: "man",
    path: ["man"],
    submenu: [
      { 
        id: "man",
        title: "man",
         path: ["man", "top"] 
        },
      {
        id: "bottom",
        title: "bottom",
        path: ["man", "bottom"],
      },
      { 
        id: "robe", 
        title: "robe", 
        path: ["man", "robe"] },
      {
        id: "overcoat",
        title: "overcoat",
        path: ["man", "overcoat"],
      },
      {
        id: "accesories",
        title: "accesories",
        path: ["man", "accesories"],
      },
    ],
  },
  { id: "about us", title: "about us", path: ["about-us"] },
  { id: "faq", title: "faq", path: ["faq"] },
];

export { mainMenu };
