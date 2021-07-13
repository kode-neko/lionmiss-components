import { LMMenuOpt, LMUserInfo } from "../types";
import { LMSearchInputProps } from "./LMSearchInput/types";

type LMMainBarProps = {
  isMobile: boolean;
  webTitle: string;
  mainMenu: LMMenuOpt[];
  userMenu: LMMenuOpt[];
  userInfo: LMUserInfo;
  columnsInfo: LMMenuOpt[];
  socialMedia: LMMenuOpt[];
  onSearch: LMSearchInputProps['onSearch']
};

export { LMMainBarProps };
