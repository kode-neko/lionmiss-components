import React from "react";
import { LMMenuOpt } from "../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const userMenu: LMMenuOpt[] = [
  { title: "language" },
  {
    title: "cart",
    path: ["cart"],
    res: true,
  },
  { title: <FontAwesomeIcon icon={faUser} />, path: ["config"], res: true },
];

export { userMenu };
