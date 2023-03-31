import React from "react";
import { LMMainBar, LMMainFooter } from "../../LMMain";
import { LMNotification } from "../../LMNotification";
import type { LMBaseLayoutProps } from "./types";
import styles from "./styles.module.scss";
import { useDisplay } from "lionmiss-core";

export const LMBaseLayout: React.FC<React.PropsWithChildren<LMBaseLayoutProps>> = ({
  children,
  mainMenu,
  mainFooter,
  xtraFooterRes,
}) => {
  const isMobile = useDisplay(992);
  return (
    <>
      <LMNotification />
      <div className={styles.layout}>
        <LMMainBar {...mainMenu} isMobile={!!isMobile} />
        <div className={styles.body}>{children}</div>
        {isMobile && xtraFooterRes}
        <LMMainFooter {...mainFooter} isMobile={!!isMobile} />
      </div>
    </>
  );
};

export default LMBaseLayout;
