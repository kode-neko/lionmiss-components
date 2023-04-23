import { Meta, StoryObj } from "@storybook/react";
import LMSelectorBox from "./LMSelectorBox";

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
        type: 'radio'
      },
      description: "Selector options"
    }
  }
} satisfies Meta<typeof LMSelectorBox>;

type Story = StoryObj<typeof meta>;

const Sizes: Story = {
  args: {
    options: [
      'XS',
      'S',
      'M',
      'L',
      'XL'
    ],
  }
}

export default meta;
export {
  Sizes
}