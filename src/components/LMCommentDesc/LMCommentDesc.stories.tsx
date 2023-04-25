import { Meta, StoryObj } from "@storybook/react";
import LMCommentDesc from "./LMCommentDesc";
import { LMCommentDescProps } from "./types";
import {comment} from '../../stories/fixtures'

const meta: Meta = {
  title: 'product / LMCommentDesc',
  component: LMCommentDesc,
  tags: ['autodocs']
} satisfies Meta<typeof LMCommentDesc>


type Story = StoryObj<typeof meta>

const args: Partial<LMCommentDescProps> = {
  comment
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