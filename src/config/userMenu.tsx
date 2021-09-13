import { LMMenuOpt } from "../lib/types";

const userMenu: LMMenuOpt[] = [
    { name: "user.language" },
    {
      name: "user.cart",
      path: ["cart"],
      icon: "shopping-bag",
      res: true
    },
    { name: "user.config", path: ["config"], icon: "user", res: true },
  ];
  

export { userMenu };
