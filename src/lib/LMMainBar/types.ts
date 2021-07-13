import { LMMainFooterColInfo, LMMainFooterSocialMedia } from "../LMMainFooter/types";
import { LMMenuOpt, LMUserInfo } from "../types";
import { LMSearchInputProps } from "./LMSearchInput/types";

type LMMainBarProps = {
  webTitle: string;
  mainMenu: LMMenuOpt[];
  userMenu: LMMenuOpt[];
  userInfo: LMUserInfo;
  columnsInfo: LMMainFooterColInfo[];
  socialMedia: LMMainFooterSocialMedia[];
  onSearch: LMSearchInputProps['onSearch']
};

export { LMMainBarProps };
