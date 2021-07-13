import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  LMMainFooterColInfo,
  LMMainFooterSocialMedia,
} from "./lib/LMMainFooter/types";
import { LMMenuOpt } from "./lib/types";

const WEB_TITLE = "Lion Miss";
const WEB_CREDITS: string[] = ["© Lion Miss 2021", "Designed by Kode Neko"];

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
    res: true
  },
  { name: "user.config", path: ["config"], icon: "user", res: true },
];

const columnsInfo: LMMainFooterColInfo[] = [
  {
    title: "Help",
    path: "",
    info: [
      { title: "Sizing", path: "" },
      { title: "Shipping", path: "" },
      { title: "Payment Methods", path: "" },
      { title: "Frequent Questions", path: "" },
    ],
  },
  {
    title: "Policies",
    path: "",
    info: [
      { title: "Private Policies", path: "" },
      { title: "Cookies", path: "" },
      { title: "Terms and Conditions", path: "" },
    ],
  },
  {
    title: "Contact",
    path: "",
    info: [
      {
        title: (
          <>
            <FontAwesomeIcon icon="comment-dots" /> <span>Chat</span>
          </>
        ),
        path: "",
      },
      {
        title: (
          <>
            <FontAwesomeIcon icon="mobile-alt" /> <span>600 00 00 00</span>
          </>
        ),
        path: "",
      },
    ],
  },
];

const socialMedia: LMMainFooterSocialMedia[] = [
  {
    title: "Instagram",
    icon: "instagram",
    path: "",
  },
  {
    title: "Pinterest",
    icon: "pinterest",
    path: "",
  },
  {
    title: "Twitter",
    icon: "twitter-square",
    path: "",
  },
  {
    title: "Facebook",
    icon: "facebook",
    path: "",
  },
];

export { WEB_TITLE, WEB_CREDITS, mainMenu, userMenu, columnsInfo, socialMedia };
