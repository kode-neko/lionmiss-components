import React, { useState } from "react";
import LMMainTitle from "./LMMainTitle";
import LMMainMenu from "./LMMainMenu/LMMainMenu";
import styles from "./styles.module.scss";
import LMSearchInput from "./LMSearchInput";
import LMUserMenu from "./LMUserMenu";
import { LMMainBarProps } from "./types";
import { useDisplay } from "../hooks";
import { menuIconLM } from "../LMIcons";
import { LMMainMenuSide } from "./LMMainMenuSide";

export const LMMainBar: React.FC<LMMainBarProps> = ({
  webTitle,
  mainMenu,
  userMenu,
  userInfo,
  columnsInfo,
  socialMedia,
  onSearch,
}) => {
  const [visibleMenuSlide, setVisibleMenuSlide] = useState<boolean>(false);
  const isMobile = useDisplay(992);
  return isMobile ? (
    <>
      <LMMainMenuSide
        visible={visibleMenuSlide}
        mainMenu={mainMenu}
        columnsInfo={columnsInfo}
        socialMedia={socialMedia}
        onClose={() => setVisibleMenuSlide(false)}
      />
      <div className={styles.contRes}>
        <div className={styles.left}>
          <div
            className={styles.menu}
            onClick={() => setVisibleMenuSlide(true)}
          >
            {menuIconLM}
          </div>
        </div>
        <div className={styles.center}>
          <LMMainTitle webTitle={webTitle} />
        </div>
        <div className={styles.right}>
          <LMUserMenu
            userMenu={userMenu.filter((opt) => opt.res === isMobile)}
            userInfo={userInfo}
          />
        </div>
      </div>
    </>
  ) : (
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
};

export default LMMainBar;
