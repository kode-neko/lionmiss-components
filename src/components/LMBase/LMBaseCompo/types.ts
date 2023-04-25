import { CSSProperties } from "react";

type LMBaseCompoProps = {
  onClick?: () => void;
  style?: CSSProperties;
  classNameXtra?: string | string[];
};

export default LMBaseCompoProps;
