import { Meta, StoryObj } from "@storybook/react";
import LMButton from "./LMButton";
import { LMButtonProps } from "./types";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const meta: Meta = {
  title: 'Form / LMButton',
  component: LMButton,
  tags: ['autodocs'],
} satisfies Meta<typeof LMButton>;

type Story = StoryObj<typeof meta>;

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
    children: 'Comprar'
  }
}

const label = <span><FontAwesomeIcon icon={faCartShopping} style={{paddingRight: '6px'}} /> Buy</span>

const Icon: Story = {
  args: {
    ...args,
    children: label 
  }
}

export default meta;
export {
  Default,
  Icon
}