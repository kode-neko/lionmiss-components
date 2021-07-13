import { IconName } from "@fortawesome/fontawesome-svg-core";

type LMMainFooterOpt = {
  title: string | JSX.Element;
  icon?: IconName;
  submenu?: LMMainFooterOpt[];
  path?: string[];
};

type LMMainFooterProps = {
  isMobile: boolean;
  columnsInfo: LMMainFooterOpt[];
  socialMedia: LMMainFooterOpt[];
  credits: string[];
};

export {
  LMMainFooterOpt,
  LMMainFooterProps,
};
