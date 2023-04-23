import { Meta, StoryObj } from "@storybook/react";
import LMInput from "./LMInput";
import { LMInputProps } from "./types";

const meta: Meta = {
  title: 'Form / LMInput',
  component: LMInput,
  tags: ['autodocs']
} satisfies Meta<typeof LMInput>;

type Story = StoryObj<typeof meta>;
const args: LMInputProps = {
  label: "Name",
  placeholder: "Insert your name",
  value: "",
  infoHint: "Type your name",
  errorHint: "",
  correctHint: ""
}

const Default: Story = {
  args: {
    ...args,
  }
}

const Error: Story = {
  args: {
    ...args,
    infoHint: "",
    errorHint: "There is an error"
  }
}

const Correct: Story = {
  args: {
    ...args,
    infoHint: "",
    correctHint: "Everything is ok"
  }
}


export default meta;
export {
  Default,
  Error,
  Correct
}