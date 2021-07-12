import { IconName } from "@fortawesome/fontawesome-svg-core";

type LMMainFooterColInfoEle = {
  title: string | JSX.Element;
  path: string;
};

type LMMainFooterColInfo = {
  title: string;
  info: LMMainFooterColInfoEle[];
};

type LMMainFooterColInfoProps = {
  col: LMMainFooterColInfo;
};

type LMMainFooterSocialMedia = {
  title: string;
  icon: IconName;
  path: string;
};

type LMMainFooterProps = {
  columnsInfo: LMMainFooterColInfo[];
  socialMedia: LMMainFooterSocialMedia[];
  credits: string[];
};

export {
  LMMainFooterColInfoEle,
  LMMainFooterColInfo,
  LMMainFooterColInfoProps,
  LMMainFooterSocialMedia,
  LMMainFooterProps,
};
