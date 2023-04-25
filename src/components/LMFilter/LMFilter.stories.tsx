import { Meta, StoryObj } from "@storybook/react";
import LMFilter from "./LMFilter";
import { LMFilterProps } from "./types";
import { LMColor, LMSize } from "lionmiss-core";
import React, { useState } from "react";

const LMFilterWrapper: React.FC<LMFilterProps> = (props: LMFilterProps) => {

  const [listColor, setListColor] = useState<LMColor[]>(props.selectedListColor);
  const [listSize, setListSize] = useState<LMSize[]>(props.selectedListSize);
  const [listStyle, setListStyle] = useState<string[]>(props.selectedListStyle);

  const changeList: <T,>(sel: T, list: T[], setFunc: React.Dispatch<React.SetStateAction<T[]>>) => void = <T,>(sel: T, list: T[], setFunc: React.Dispatch<React.SetStateAction<T[]>>) => {
    const found: boolean = list.some((c: T) => c === sel);
    const newList: T[] = found ? list.filter((c: T) => c !== sel) : [...list, sel];
    setFunc(newList);
  }

  return (<LMFilter 
    {...props} 
    selectedListColor={listColor}
    onChangeListColor={(val: LMColor) => changeList<LMColor>(val, listColor, setListColor)}
    selectedListSize={listSize}
    onChangeListSize={(val: LMSize) => changeList<LMSize>(val, listSize, setListSize)}
    selectedListStyle={listStyle}
    onChangeListStyle={(val: string) => changeList<string>(val, listStyle, setListStyle)}
  />)
}

const meta: Meta = {
  title: 'Misc / LMFilter',
  component: LMFilterWrapper,
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