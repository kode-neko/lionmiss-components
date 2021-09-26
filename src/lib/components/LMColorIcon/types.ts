import { LMColor } from "../../../core/model";

type LMColorIconProps = {
  color: LMColor;
  isSelectable?: boolean;
  selected?: boolean;
  classProp?: string;
  onClick?: () => void;
};

export { LMColorIconProps };
