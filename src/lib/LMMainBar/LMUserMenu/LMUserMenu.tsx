import React from "react";
import { LMMenuOpt } from "../../types";
import { useTranslation } from "react-i18next";
import { createPath } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LMUserMenuProps } from "./types";
import styles from "./styles.module.scss";
import { LMCartIcon } from "./LMCartIcon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const LMUserMenu: React.FC<LMUserMenuProps> = ({
  userMenu,
  userInfo,
}) => {
  const { t } = useTranslation("paths");

  const createLMMenuOpt = (opt: LMMenuOpt) => {
    let tpl: JSX.Element;

    switch (opt.name) {
      case "user.language":
        tpl = <span className={styles.lang}>{userInfo.lang}</span>;
        break;
      case "user.cart":
        tpl = <LMCartIcon cont={userInfo.cart.length} />;
        break;
      default:
        tpl = opt.icon ? <FontAwesomeIcon className={styles.icon} icon={opt.icon} /> : <></>;
    }

    return (
      <li key={opt.name} className={styles.opt}>
        {opt.path && (
          <a className={styles.link} href={createPath(opt.path, t)}>
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
