import { Meta, StoryObj } from "@storybook/react";
import LMProductInfo from "./LMProductInfo";
import LMProductInfoProps from "./type";
import {product, modelBlackImg} from '../../../stories/fixtures'

const meta: Meta = {
  title: 'Product / LMProductInfo',
  component: LMProductInfo,
  tags: ['autodocs'],
} satisfies Meta<typeof LMProductInfo>;

type Story = StoryObj<typeof meta>;

const args: LMProductInfoProps = {
  lang: 'en',
  currency: 'eur',
  img: modelBlackImg.src,
  product
}

const Default: Story = {
  args: {
    ...args,
  }
}

export default meta;
export {
  Default
}