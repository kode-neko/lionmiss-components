import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import LMBaseCompoProps from "./types";

export const LMBaseCompo: React.FC<LMBaseCompoProps> = ({
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
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default LMBaseCompo;
