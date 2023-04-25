import React from "react";
import { createPath } from "../../../../utils";
import { LMUserMenuProps } from "./types";
import styles from "./styles.module.scss";
import { LMCartIcon } from "./LMCartIcon";
import { LMMenuOpt } from "../../../../types";

export const LMUserMenu: React.FC<LMUserMenuProps> = ({
  userMenu,
  userInfo,
}: LMUserMenuProps) => {
  const createLMMenuOpt: JSX.Element = (opt: LMMenuOpt) => {
    let tpl: JSX.Element;

    switch (opt.id) {
      case "lang":
        tpl = <span className={styles.lang}>{userInfo.lang}</span>;
        break;
      case "cart":
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
