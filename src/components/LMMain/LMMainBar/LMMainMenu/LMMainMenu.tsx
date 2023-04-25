/* eslint-disable @typescript-eslint/typedef */
import React, { useState } from "react";
import { LMMenuOpt } from "../../../../types";
import { createPath } from "../../../../utils";
import { LMMainMenuProps, LMMenuOptPlus } from "./types";
import styles from "./styles.module.scss";
import { arrowDownIconLM } from "../../../LMIcons";

export const LMMainMenu: React.FC<LMMainMenuProps> = ({ mainMenu }: LMMainMenuProps) => {
  const createMenuPlus = () =>
    mainMenu.map((opt) => ({ ...opt, visible: false }));
  const [menuPlus, setMenuPlus] = useState<LMMenuOptPlus[]>(createMenuPlus());

  const handleMouseOverLMMenuOpt = (name: string) => {
    const newMenuPlus = menuPlus.map((opt) =>
      opt.title === name ? { ...opt, visible: true } : opt
    );
    setMenuPlus(newMenuPlus);
  };

  const handleMouseLeaveLMMenuOpt = () => {
    const newMenuPlus = menuPlus.map((opt) => ({ ...opt, visible: false }));
    setMenuPlus(newMenuPlus);
  };

  const createSubmenu = (menu: LMMenuOpt[], visible: boolean) => (
    <div
      className={styles.submenu}
      style={{ display: visible ? "block" : "none" }}
    >
      <ul className={styles.list}>
        {menu.map((opt) => (
          <li key={opt.title as string}>
            <a href={createPath(opt.path || [])}>{opt.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  const createLMMenuOpt = (opt: LMMenuOptPlus) => {
    const submenu = opt.submenu && createSubmenu(opt.submenu, opt.visible);
    const link = (
      <a href={createPath(opt.path || [])}>
        {opt.title as string}
        {opt.submenu && <span className={styles.arrow}>{arrowDownIconLM}</span>}
      </a>
    );
    return (
      <li
        className={styles.opt}
        key={opt.title as string}
        onMouseOver={() => handleMouseOverLMMenuOpt(opt.title as string)}
        onMouseLeave={() => handleMouseLeaveLMMenuOpt()}
      >
        {link}
        {submenu}
      </li>
    );
  };

  return (
    <ul className={styles.menu}>
      {menuPlus.map((opt) => createLMMenuOpt(opt))}
    </ul>
  );
};

export default LMMainMenu;
