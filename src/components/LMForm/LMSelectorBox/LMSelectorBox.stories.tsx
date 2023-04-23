import { Meta, StoryObj } from "@storybook/react";
import LMSelectorBox from "./LMSelectorBox";
import { LMSelectorBoxProps } from "./types";

const meta: Meta = {
  title: 'Form / LMSelectorBox',
  component: LMSelectorBox,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      options: [
        'XS',
        'S',
        'M',
        'L',
        'XL'
      ],
      control: {
        type: 'select'
      },
      defaultValue: 'M',
      description: "Selector options"
    }
  }
} satisfies Meta<typeof LMSelectorBox>;

type Story = StoryObj<typeof meta>;

const args: Partial<LMSelectorBoxProps> = {
  options: [
    'XS',
    'S',
    'M',
    'L',
    'XL'
  ],
  selected: 'M'
}

const Sizes: Story = {
  args: {
    ...args
  }
}

export default meta;
export {
  Sizes
}