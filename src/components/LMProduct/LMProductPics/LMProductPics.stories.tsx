import { Meta, StoryObj } from "@storybook/react";
import LMProductPics from "./LMProductPics";
import { LMProductPicsProps } from "./types";
import {modelPurpleImgList} from '../../../stories/fixtures'

const meta: Meta = {
  title: 'Product / LMProductPics',
  component: LMProductPics,
  tags: ['autodocs'],
} satisfies Meta<typeof LMProductPics>;

type Story = StoryObj<typeof meta>;

const args: LMProductPicsProps = {
  imgList: modelPurpleImgList,
  thumbList: modelPurpleImgList
}

const Default: Story = {
  args: {
    ...args
  }
}

export default meta;
export {
  Default
}