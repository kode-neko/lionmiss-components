import { Meta, StoryObj } from "@storybook/react";
import LMButton, { LMButtonProps } from "./LMButton";

const meta: Meta = {
  title: 'Form / LMButton',
  component: LMButton,
  tags: ['autodocs']
} satisfies Meta<typeof LMButton>;

type Story = StoryObj<typeof LMButton>;
const args: LMButtonProps = {
  small: true,
  medium: false,
  large: false,
  main: true,
  second: false
}

const Default: Story = {
  args: {
    ...args,
    children: 'Patata'
  }
}


export default meta;
export {
  Default
}