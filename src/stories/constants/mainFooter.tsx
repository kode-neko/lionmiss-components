import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faPinterest, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { LMMenuOpt } from "../../types";
import {faker} from '@faker-js/faker'

const columnsInfo: LMMenuOpt[] = [
  {
    title: "help",
    path: ["help"],
    submenu: [
      { title: "sizing", path: ["help", "sizing"] },
      { title: "shipping", path: ["help", "shipping"] },
      { title: "payment", path: ["help", "payment"] },
      { title: "questions", path: ["help", "question"] },
    ],
  },
  {
    title: "policies",
    path: ["policies"],
    submenu: [
      { title: "private", path: ["policies", "private"] },
      { title: "cookies", path: ["policies", "cookies"] },
      { title: "terms", path: ["policies", "terms"] },
    ],
  },
  {
    title: "contact.title",
    path: ["contact"],
    submenu: [
      {
        title: <><FontAwesomeIcon icon={faComment} /> <span>Chat</span></>,
        path: ["contact", "chat"],
      },
      {
        title: <><FontAwesomeIcon icon={faPhone} /> <span>{faker.phone.number('600 ## ## ##')}</span></>,
        path: ["contact", "phone"],
      },
    ],
  },
];

const socialMedia: LMMenuOpt[] = [
  {
    title: <FontAwesomeIcon icon={faInstagram} />,
    path: [],
  },
  {
    title: <FontAwesomeIcon icon={faPinterest} />,
    path: [],
  },
  {
    title: <FontAwesomeIcon icon={faTwitter} />,
    path: [],
  },
  {
    title: <FontAwesomeIcon icon={faFacebook} />,
    path: [],
  },
];

export { columnsInfo, socialMedia };
