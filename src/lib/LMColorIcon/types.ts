import { LMColor } from "../types";

type LMColorIconProps = {
  color: LMColor;
  isSelectable?: boolean;
  selected?: boolean;
  classProp?: string;
  onClick?: () => void;
};

export { LMColorIconProps };
