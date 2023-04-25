import { Meta, StoryObj } from "@storybook/react";
import LMProductPurchase from "./LMProductPurchase";
import { LMProductPurchaseProps } from "./types";
import React, { useState } from "react";
import {product} from '../../../stories/fixtures'

const LMProductPurchaseWrapper: React.FC<LMProductPurchaseProps> = (props: LMProductPurchaseProps) => {
  const [isFav, setIsFav] = useState(false);

  return <LMProductPurchase {...props} isFav={isFav} onClickFav={() => setIsFav(!isFav)} />
}

const meta: Meta = {
  title: 'product / LMProductPurchase',
  component: LMProductPurchaseWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof LMProductPurchase>

type Story = StoryObj<typeof meta>

const args: Partial<LMProductPurchaseProps> = {
  lang: 'es',
  currency: 'eur',
  product: product,
  isFav: true,
  min: 1,
  max: 5
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