import { LMMainFooterColInfo, LMMainFooterSocialMedia } from "../../LMMainFooter/types";
import { LMMenuOpt } from "../../types";

type LMMainSubMenuSideProps = {
    subMenu: LMMenuOpt[];
}

type LMMainMenuSideProps = {
  mainMenu: LMMenuOpt[];
  columnsInfo: LMMainFooterColInfo[];
  socialMedia: LMMainFooterSocialMedia[];
  onClose: () => void;
};

export { LMMainMenuSideProps, LMMainSubMenuSideProps };
