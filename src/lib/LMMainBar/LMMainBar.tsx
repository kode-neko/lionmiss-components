import React from "react";
import { mainMenu, userMenu } from "../constants";
import { MenuOpt } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { TFunction } from "i18next";

const createPath = (pathList: string[], t: TFunction) => pathList.map(ele => t(ele)).join('/')

export const LMMainBar: React.FC = () => {
  const { t: tMM } = useTranslation("mainMenu");
  const { t: tP } = useTranslation("paths");
  const createMenu = (menu: MenuOpt[]) => (
    <ul>{menu.map((opt) => createMenuOpt(opt))}</ul>
  );

  const createMenuOpt = (opt: MenuOpt) => {
    const submenu = opt.opts && createMenu(opt.opts);
    const link = (
      <a href={createPath(opt.path || [], tP)}>
        {opt.icon ? <FontAwesomeIcon icon={opt.icon} /> : tMM(opt.name)}
      </a>
    );

    const menu = (
      <li key={opt.name}>
        {link}
        {submenu}
      </li>
    );
    return menu;
  };

  return (
    <div>
      <div className={styles.mainTitle}>
        <h1>WEB_TITLE</h1>
      </div>
      <div>{createMenu(mainMenu)}</div>
      <div>
        <input type="text" />
        <FontAwesomeIcon icon="search" />
      </div>
      <div>{createMenu(userMenu)}</div>
    </div>
  );
};

export default LMMainBar;
