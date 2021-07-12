import React from "react";
import LMMainBar from "../LMMainBar/LMMainBar";
import LMMainFooter from "../LMMainFooter/LMMainFooter";
import { LMBaseLayoutProps } from "./types";
import styles from "./styles.module.scss";

export const LMBaseLayout: React.FC<LMBaseLayoutProps> = ({
  children,
  mainMenu,
  mainFooter,
}) => {
  return (
    <div className={styles.layout}>
      <LMMainBar {...mainMenu} />
      <div className={styles.body}>{children}</div>
      <LMMainFooter {...mainFooter} />
    </div>
  );
};

export default LMBaseLayout;
