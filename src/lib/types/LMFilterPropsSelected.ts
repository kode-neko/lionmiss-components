import { LMFilterProps } from "../components/LMFilter/types";

type LMFilterPropsSelected = Pick<
  LMFilterProps,
  | "selectedListColor"
  | "selectedListSize"
  | "valMinPrice"
  | "valMaxPrice"
  | "selectedListStyle"
>;

export type { LMFilterPropsSelected };
