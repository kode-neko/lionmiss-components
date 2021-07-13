import { userIconLM } from "../lib/LMIcons";
import { LMMenuOpt } from "../lib/types";

const userMenu: LMMenuOpt[] = [
  { title: "user.language" },
  {
    title: "user.cart",
    path: ["cart"],
    res: true,
  },
  { title: userIconLM, path: ["config"], res: true },
];

export { userMenu };
