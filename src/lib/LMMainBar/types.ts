import { LMMenuOpt, LMUserInfo } from "../types";
import { LMSearchInputProps } from "./LMSearchInput/types";

type LMMainMenuProps = {
  webTitle: string;
  mainMenu: LMMenuOpt[];
  userMenu: LMMenuOpt[];
  userInfo: LMUserInfo;
  onSearch: LMSearchInputProps['onSearch']
};

export { LMMainMenuProps };
