import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LMMainFooterColInfo,
  LMMainFooterSocialMedia,
} from "../lib/LMMainFooter/types";

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

export { columnsInfo, socialMedia };
