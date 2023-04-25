import { LMMenuOpt } from "../../../../types";

type LMMainSubMenuSideProps = {
  subMenu: LMMenuOpt[];
};

type LMMainSubMenuOptProps = {
  opt: LMMenuOpt;
  handleClickOpt: (name: string) => void;
  visibleSubmenu: string | undefined;
};

type LMMainMenuSideProps = {
  visible: boolean;
  mainMenu: LMMenuOpt[];
  columnsInfo: LMMenuOpt[];
  socialMedia: LMMenuOpt[];
  onClose: () => void;
};

export type { LMMainMenuSideProps, LMMainSubMenuOptProps, LMMainSubMenuSideProps };
