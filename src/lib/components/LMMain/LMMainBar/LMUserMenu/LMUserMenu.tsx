import React from "react";
import { LMMenuOpt } from "../../../../types";
import { createPath } from "../../../../utils";
import { LMUserMenuProps } from "./types";
import styles from "./styles.module.scss";
import { LMCartIcon } from "./LMCartIcon";

export const LMUserMenu: React.FC<LMUserMenuProps> = ({
  userMenu,
  userInfo,
}) => {
  const createLMMenuOpt = (opt: LMMenuOpt) => {
    let tpl: JSX.Element;

    switch (opt.title) {
      case "user.language":
        tpl = <span className={styles.lang}>{userInfo.user.lang}</span>;
        break;
      case "user.cart":
        tpl = <LMCartIcon cont={userInfo.cart?.products.length || 0} />;
        break;
      default:
        tpl = opt.title as JSX.Element;
    }

    return (
      <li key={opt.title as string} className={styles.opt}>
        {opt.path && (
          <a className={styles.link} href={createPath(opt.path)}>
            {tpl}
          </a>
        )}
        {!opt.path && tpl}
      </li>
    );
  };

  return (
    <ul className={styles.menu}>
      {userMenu.map((opt) => createLMMenuOpt(opt))}
    </ul>
  );
};

export default LMUserMenu;
