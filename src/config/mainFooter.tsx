import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LMMainFooterOpt
} from "../lib/LMMainFooter/types";

const columnsInfo: LMMainFooterOpt[] = [
  {
    title: "help.title",
    path: ["help"],
    submenu: [
      { title: "help.sizing", path: ["help", "sizing"] },
      { title: "help.shipping", path: ["help", "shipping"] },
      { title: "help.payment", path: ["help", "payment"] },
      { title: "help.questions", path: ["help", "question"] },
    ],
  },
  {
    title: "policies.title",
    path: ["policies"],
    submenu: [
      { title: "policies.private", path: ["policies", "private"] },
      { title: "policies.cookies", path: ["policies", "cookies"] },
      { title: "policies.terms", path: ["policies", "terms"] },
    ],
  },
  {
    title: "contact.title",
    path: ["contact"],
    submenu: [
      {
        title: (
          <>
            <FontAwesomeIcon icon="comment-dots" /> <span>Chat</span>
          </>
        ),
        path: ["contact", "chat"],
      },
      {
        title: (
          <>
            <FontAwesomeIcon icon="mobile-alt" /> <span>600 00 00 00</span>
          </>
        ),
        path: ["contact", "phone"],
      },
    ],
  },
];

const socialMedia: LMMainFooterOpt[] = [
  {
    title: "instagram",
    icon: "instagram",
    path: [],
  },
  {
    title: "pinterest",
    icon: "pinterest",
    path: [],
  },
  {
    title: "twitter",
    icon: "twitter-square",
    path: [],
  },
  {
    title: "facebook",
    icon: "facebook",
    path: [],
  },
];

export { columnsInfo, socialMedia };
