import React from "react";
import LMMainTitle from "./LMMainTitle";
import LMMainMenu from "./LMMainMenu/LMMainMenu";
import styles from "./styles.module.scss";
import LMSearchInput from "./LMSearchInput";
import LMUserMenu from "./LMUserMenu";
import { LMMainBarProps } from "./types";

export const LMMainBar: React.FC<LMMainBarProps> = ({
  webTitle,
  mainMenu,
  userMenu,
  userInfo,
  onSearch,
}) => (
  <div className={styles.cont}>
    <div className={styles.left}>
      <div className={styles.mainTitle}>
        <LMMainTitle webTitle={webTitle} />
      </div>
      <div className={styles.mainMenu}>
        <LMMainMenu mainMenu={mainMenu} />
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.search}>
        <LMSearchInput onSearch={onSearch} />
      </div>
      <LMUserMenu userMenu={userMenu} userInfo={userInfo} />
    </div>
  </div>
);

export default LMMainBar;
