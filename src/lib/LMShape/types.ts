import { CSSProperties } from "react";

enum LMColorShape {
  Main = "rgba(160, 107, 227, 1)",
  MainDarken = "rgba(135, 105, 173, 1)",
  Second = "rgba(111, 175, 234, 1)",
}

type LMShapeProps = {
  isActivable?: boolean;
  isActive?: boolean;
  className?: string;
  style?: CSSProperties;
  content?: string | JSX.Element;
  color?: LMColorShape;
  colorActive?: LMColorShape;
  height?: string;
  width?: string;
  onClick?: () => void;
};

type LMArrowThickProps = LMShapeProps;

export { LMColorShape, LMArrowThickProps };
