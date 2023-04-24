import { Meta, StoryObj } from "@storybook/react";
import LMMainBar from "./LMMainBar";
import { LMMainBarProps } from "./types";
import { mainMenu } from "../../../config/mainMenu";
import { userMenu } from "../../../config/userMenu";
import { LMUserInfo } from "lionmiss-core";
import { WEB_TITLE } from "../../../config/constants";

const meta: Meta = {
  title: 'Bars & Footers / LMMainBar',
  component: LMMainBar,
  tags: ['autodocs'],
} satisfies Meta<typeof LMMainBar>;

type Story = StoryObj<typeof meta>;

const userInfo: LMUserInfo = {
  cart: {
    products: [],
    taxes: 21
  },
  favProducts: [],
  avatar: "",
  lang: "en",
  currency: "",
  measures: {
    chest: 1,
    waist: 1,
    hip: 1
  },
  email: "",
  addresses: []
};
const args: Partial<LMMainBarProps> = {
  webTitle: WEB_TITLE,
  isMobile: false,
  mainMenu,
  userMenu,
  userInfo
}

const Web: Story = {
  args: {
    ...args
  }
}

const Mobile: Story = {
  decorators: [
    (Story) => <div style={{maxWidth: '600px'}}><Story /></div> 
  ],
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