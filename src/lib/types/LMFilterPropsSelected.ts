import { LMFilterProps } from "../LMFilter/types";

type LMFilterPropsSelected = Pick<
  LMFilterProps,
  | "selectedListColor"
  | "selectedListSize"
  | "valMinPrice"
  | "valMaxPrice"
  | "selectedListStyle"
>;

export { LMFilterPropsSelected };
