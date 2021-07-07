import { IconName } from "@fortawesome/fontawesome-svg-core";

type MenuOpt = {
  name: string;
  opts?: MenuOpt[];
  path?: string[];
  icon?: IconName;
};

export { MenuOpt };
