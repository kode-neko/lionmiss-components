import { Meta, StoryObj } from "@storybook/react";
import LMFilter from "./LMFilter";
import { LMFilterProps } from "./types";
import { LMColor, LMSize } from "lionmiss-core";

const meta: Meta = {
  title: 'Misc / LMFilter',
  component: LMFilter,
  tags: ['autodocs'],
} satisfies Meta<typeof LMFilter>;

type Story = StoryObj<typeof meta>;

const args: Partial<LMFilterProps> = {
  selectedListColor: [LMColor.Green],
  selectedListSize: [LMSize.M],
  minPrice: 10,
  maxPrice: 200,
  valMinPrice: 20,
  valMaxPrice: 100,
  listStyle: ['casual', 'urban', 'boho', 'gothic', 'party'],
  selectedListStyle: ['urban']
}

const Web: Story = {
  args: {
    ...args
  }
}

export default meta;
export {
  Web
}