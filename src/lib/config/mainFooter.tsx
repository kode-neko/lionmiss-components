import React from "react";
import {
  commentIconLM,
  facebookIconLM,
  instagramIconLM,
  phoneIconLM,
  pinterestIconLM,
  twitterIconLM,
} from "../components/LMIcons";
import { LMMenuOpt } from "../types";

const columnsInfo: LMMenuOpt[] = [
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
            {commentIconLM} <span>Chat</span>
          </>
        ),
        path: ["contact", "chat"],
      },
      {
        title: (
          <>
            {phoneIconLM} <span>600 00 00 00</span>
          </>
        ),
        path: ["contact", "phone"],
      },
    ],
  },
];

const socialMedia: LMMenuOpt[] = [
  {
    title: instagramIconLM,
    path: [],
  },
  {
    title: pinterestIconLM,
    path: [],
  },
  {
    title: twitterIconLM,
    path: [],
  },
  {
    title: facebookIconLM,
    path: [],
  },
];

export { columnsInfo, socialMedia };
