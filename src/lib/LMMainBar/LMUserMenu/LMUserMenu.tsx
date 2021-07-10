import React from "react";
import { LMMenuOpt } from "../../types";
import { useTranslation } from "react-i18next";
import { createPath } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LMUserMenuProps } from "./types";
import styles from "./styles.module.scss";
import { LMCartIcon } from "./LMCartIcon";

export const LMUserMenu: React.FC<LMUserMenuProps> = ({
  userMenu,
  userInfo,
}) => {
  const { t } = useTranslation("paths");

  const createLMMenuOpt = (opt: LMMenuOpt) => {
    let tpl = null;

    switch (opt.name) {
      case "user.language":
        tpl = <span className={styles.lang}>{userInfo.lang}</span>;
        break;
      case "user.cart":
        tpl = <LMCartIcon cont={3} />;
        break;
      default:
        tpl = opt.icon && (
          <FontAwesomeIcon className={styles.icon} icon={opt.icon} />
        );
    }

    return (
      <li key={opt.name} className={styles.opt}>
        <a className={styles.link} href={createPath(opt.path || [], t)}>
          {tpl}
        </a>
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
