import { LMMenuOpt } from "../../../../types";

type LMMainMenuProps = {
  mainMenu: LMMenuOpt[];
};

interface LMMenuOptPlus extends LMMenuOpt {
  visible: boolean;
}

export type { LMMainMenuProps, LMMenuOptPlus };
