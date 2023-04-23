import { LMColor } from "lionmiss-core";

type LMColorIconProps = {
  color: LMColor;
  isSelectable?: boolean;
  selected?: boolean;
  classProp?: string;
  onClick?: () => void;
};

export type { LMColorIconProps };
