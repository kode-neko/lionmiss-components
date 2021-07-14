import classNames from "classnames";
import React, { MouseEvent } from "react";
import styles from "./styles.module.scss";
import LMBaseComponentProps from "./types";

export const LMBaseComponent: React.FC<LMBaseComponentProps> = ({
  children,
  classNameXtra,
  onClick,
  ...props
}) => {
  let classNameXtraExtract: string[] = [];
  if (typeof classNameXtra === "string") classNameXtraExtract = [classNameXtra];
  else if (classNameXtra?.length) classNameXtraExtract = classNameXtra;
  return (
    <div
      className={classNames(
        styles.cont,
        classNameXtra && [...classNameXtraExtract]
      )}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        if (onClick) onClick();
        return false;
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default LMBaseComponent;
