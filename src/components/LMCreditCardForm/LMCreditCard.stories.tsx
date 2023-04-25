import { Meta, StoryObj } from "@storybook/react";
import LMCreditForm from "./LMCreditCardForm";
import { LMCreditCardFormProps } from "./types";
import {faker} from '@faker-js/faker'

const meta: Meta = {
  title: 'Misc / LMCreditCardForm',
  component: LMCreditForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LMCreditForm>;

type Story = StoryObj<typeof meta>;

const args: Partial<LMCreditCardFormProps> = {
  values: {
    creditNumber: faker.finance.creditCardNumber(),
    fullName: faker.name.fullName(),
    month: faker.random.numeric(2),
    year: faker.random.numeric(2),
    cvv: faker.random.numeric(3)
  },
  placeholder: {
    creditNumber: 'xxx xxx xxx xxx',
    fullName: 'your name...',
    month: 'xx',
    year: 'xx',
    cvv: 'xxx'
  },
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