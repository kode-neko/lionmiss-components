import { userIconLM } from "../components/LMIcons";
import { LMMenuOpt } from "../types";

const userMenu: LMMenuOpt[] = [
  { title: "language" },
  {
    title: "cart",
    path: ["cart"],
    res: true,
  },
  { title: userIconLM, path: ["config"], res: true },
];

export { userMenu };
