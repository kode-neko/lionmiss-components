import { IconName } from "@fortawesome/fontawesome-svg-core";

interface MenuOpt{
  name: string;
  opts?: MenuOpt[];
  path?: string[];
  icon?: IconName;
};

export { MenuOpt };
