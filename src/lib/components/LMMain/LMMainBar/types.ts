import { LMMenuOpt } from "../../../types";
import { LMUserInfo } from "../../../../core/model";
import { LMSearchInputProps } from "./LMSearchInput/types";

type LMMainBarProps = {
  isMobile: boolean;
  webTitle: string;
  mainMenu: LMMenuOpt[];
  userMenu: LMMenuOpt[];
  userInfo: LMUserInfo;
  columnsInfo: LMMenuOpt[];
  socialMedia: LMMenuOpt[];
  onSearch: LMSearchInputProps["onSearch"];
};

export { LMMainBarProps };
