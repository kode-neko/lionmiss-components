import {
  LMMainFooterColInfo,
  LMMainFooterSocialMedia,
} from "../../LMMainFooter/types";
import { LMMenuOpt } from "../../types";

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
  columnsInfo: LMMainFooterColInfo[];
  socialMedia: LMMainFooterSocialMedia[];
  onClose: () => void;
};

export { LMMainMenuSideProps, LMMainSubMenuOptProps, LMMainSubMenuSideProps };
