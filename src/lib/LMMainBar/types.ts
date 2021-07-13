import { LMMainFooterOpt } from "../LMMainFooter/types";
import { LMMenuOpt, LMUserInfo } from "../types";
import { LMSearchInputProps } from "./LMSearchInput/types";

type LMMainBarProps = {
  isMobile: boolean;
  webTitle: string;
  mainMenu: LMMenuOpt[];
  userMenu: LMMenuOpt[];
  userInfo: LMUserInfo;
  columnsInfo: LMMainFooterOpt[];
  socialMedia: LMMainFooterOpt[];
  onSearch: LMSearchInputProps['onSearch']
};

export { LMMainBarProps };
