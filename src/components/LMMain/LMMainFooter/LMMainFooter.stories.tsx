import { Meta, StoryObj } from "@storybook/react";
import LMMainFooter from "./LMMainFooter";
import { LMMainFooterProps } from "./types";
import { WEB_CREDITS, columnsInfo, socialMedia } from "../../../stories/constants";

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