import React from "react";
import LMMainBar from "../LMMainBar/LMMainBar";
import LMMainFooter from "../LMMainFooter/LMMainFooter";
import LMNotification from "../LMNotification/LMNotification";
import { LMBaseLayoutProps } from "./types";
import styles from "./styles.module.scss";
import { useDisplay } from "../hooks";

export const LMBaseLayout: React.FC<LMBaseLayoutProps> = ({
  children,
  mainMenu,
  mainFooter,
}) => {
  const isMobile = useDisplay(992);
  return (
    <>
      <LMNotification />
      <div className={styles.layout}>
        <LMMainBar {...mainMenu} isMobile={!!isMobile} />
        <div className={styles.body}>{children}</div>
        <LMMainFooter {...mainFooter} isMobile={!!isMobile} />
      </div>
    </>
  );
};

export default LMBaseLayout;
