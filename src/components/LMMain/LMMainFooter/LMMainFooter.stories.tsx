import { Meta, StoryObj } from "@storybook/react";
import LMMainFooter from "./LMMainFooter";
import { LMMainFooterProps } from "./types";
import { LMMenuOpt } from "../../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faPinterest, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { WEB_CREDITS } from "../../../config/constants";

const columnsInfo: LMMenuOpt[] = [
  {
    title: "Help",
    path: ["help"],
    submenu: [
      { title: "Sizing", path: ["help", "sizing"] },
      { title: "Shipping", path: ["help", "shipping"] },
      { title: "Payment", path: ["help", "payment"] },
      { title: "Questions", path: ["help", "question"] },
    ],
  },
  {
    title: "Policies",
    path: ["policies"],
    submenu: [
      { title: "Private", path: ["policies", "private"] },
      { title: "Cookies", path: ["policies", "cookies"] },
      { title: "Terms", path: ["policies", "terms"] },
    ],
  },
  {
    title: "Contact",
    path: ["contact"],
    submenu: [
      {
        title: <><FontAwesomeIcon icon={faComment} /> <span>Chat</span></>,
        path: ["contact", "chat"],
      },
      {
        title: <><FontAwesomeIcon icon={faPhone} /> <span>600 00 00 00</span></>,
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

const meta: Meta = {
  title: 'Bars & Footers / LMMainFooter',
  component: LMMainFooter,
  tags: ['autodocs'],
} satisfies Meta<typeof LMMainFooter>;

type Story = StoryObj<typeof meta>;

const args: Partial<LMMainFooterProps> = {
  isMobile: false,
  columnsInfo,
  socialMedia,
  credits: WEB_CREDITS
}

const Web: Story = {
  args: {
    ...args
  }
}

const Mobile: Story = {
  args: {
    ...args,
    isMobile: true
  }
}

export default meta;
export {
  Web,
  Mobile
}