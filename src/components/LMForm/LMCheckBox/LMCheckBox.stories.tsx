import { Meta, StoryObj } from "@storybook/react";
import LMCheckBox from "./LMCheckBox";
import { LMCheckBoxProps } from "./types";

const meta: Meta = {
  title: 'Form / LMCheckBox',
  component: LMCheckBox,
  tags: ['autodocs']
} satisfies Meta<typeof LMCheckBox>;

type Story = StoryObj<typeof LMCheckBox>;
const props: LMCheckBoxProps = {
  label: 'Patata',
  value: 'frita',
  checked: true
}

const Default: Story = {
  args: {
    ...props
  }
}

export default meta;
export {
  Default
}