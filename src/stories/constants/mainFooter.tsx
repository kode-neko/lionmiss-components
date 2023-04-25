import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faPinterest, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { LMMenuOpt } from "../../types";
import {faker} from '@faker-js/faker'

const columnsInfo: LMMenuOpt[] = [
  {
    id: "help",
    title: "help",
    path: ["help"],
    submenu: [
      { id: "sizing", title: "sizing", path: ["help", "sizing"] },
      { id: "shipping", title: "shipping", path: ["help", "shipping"] },
      { id: "payment", title: "payment", path: ["help", "payment"] },
      { id: "payment", title: "payment", path: ["help", "payment"] },
      { id: "questions", title: "questions", path: ["help", "question"] },
    ],
  },
  {
    id: "policies",
    title: "policies",
    path: ["policies"],
    submenu: [
      { id: "private", title: "private", path: ["policies", "private"] },
      { id: "cookies", title: "cookies", path: ["policies", "cookies"] },
      { id: "terms", title: "terms", path: ["policies", "terms"] },
    ],
  },
  {
    id: "contact.title",
    title: "contact.title",
    path: ["contact"],
    submenu: [
      {
        id: "chat",
        title: <><FontAwesomeIcon icon={faComment} /> <span>Chat</span></>,
        path: ["contact", "chat"],
      },
      {
        id: "phone",
        title: <><FontAwesomeIcon icon={faPhone} /> <span>{faker.phone.number('600 ## ## ##')}</span></>,
        path: ["contact", "phone"],
      },
    ],
  },
];

const socialMedia: LMMenuOpt[] = [
  {
    id: "instagram",
    title: <FontAwesomeIcon icon={faInstagram} />,
    path: [],
  },
  {
    id: "pinterest",
    title: <FontAwesomeIcon icon={faPinterest} />,
    path: [],
  },
  {
    id: "twitter",
    title: <FontAwesomeIcon icon={faTwitter} />,
    path: [],
  },
  {
    id: "faceboo",
    title: <FontAwesomeIcon icon={faFacebook} />,
    path: [],
  },
];

export { columnsInfo, socialMedia };
