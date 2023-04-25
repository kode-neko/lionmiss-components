import React from "react";
import { LMMenuOpt } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const userMenu: LMMenuOpt[] = [
  { id: "lang", title: "language" },
  {
    id: "cart",
    title: "cart",
    path: ["cart"],
    res: true,
  },
  { id: "user", title: <FontAwesomeIcon icon={faUser} />, path: ["config"], res: true },
];

export { userMenu };
