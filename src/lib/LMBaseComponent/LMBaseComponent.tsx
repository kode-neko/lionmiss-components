import classNames from "classnames";
import React from "react";
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
  console.log(classNameXtraExtract)
  return (
    <div
      className={classNames(
        styles.cont,
        classNameXtra && [...classNameXtraExtract]
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default LMBaseComponent;
