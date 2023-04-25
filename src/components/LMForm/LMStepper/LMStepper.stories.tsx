import { Meta, StoryObj } from "@storybook/react";
import LMStepper from "./LMStepper";
import { LMStepperProps } from "./types";
import React, { useState } from "react";


const LMStepperWrapper: React.FC<LMStepperProps> = (props: LMStepperProps) => {
  const [val, setVal] = useState(props.value);
  const handleChange: (val: number) => void = (newVal: number) => {
    setVal(newVal);
  };
  return <LMStepper {...props} onMax={handleChange} value={val} onMinus={handleChange} />
}

const meta: Meta = {
  title: 'Form / LMStepper',
  component: LMStepperWrapper,
  tags: ['autodocs'],
} satisfies Meta<typeof LMStepper>;

type Story = StoryObj<typeof meta>;
const args: Partial<LMStepperProps> = {
  value: 10,
  min: 0,
  max: 20
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