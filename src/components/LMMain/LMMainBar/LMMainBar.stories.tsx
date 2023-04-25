import { Meta, StoryObj } from "@storybook/react";
import LMMainBar from "./LMMainBar";
import { LMMainBarProps } from "./types";
import {userInfo} from '../../../stories/fixtures'
import { WEB_TITLE, mainMenu, userMenu, socialMedia, columnsInfo } from "../../../stories/constants";

const meta: Meta = {
  title: 'Bars & Footers / LMMainBar',
  component: LMMainBar,
  tags: ['autodocs'],
} satisfies Meta<typeof LMMainBar>;

type Story = StoryObj<typeof meta>;

const args: Partial<LMMainBarProps> = {
  webTitle: WEB_TITLE,
  isMobile: false,
  mainMenu,
  userMenu,
  userInfo,
  socialMedia,
  columnsInfo
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