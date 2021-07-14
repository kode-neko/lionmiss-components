import { CSSProperties } from "react";

type LMBaseComponentProps = {
  onClick?: () => void;
  style?: CSSProperties;
  classNameXtra?: string | string[];
};

export default LMBaseComponentProps;
