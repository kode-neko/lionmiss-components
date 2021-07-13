import { IconName } from "@fortawesome/fontawesome-svg-core";

type LMMainFooterColInfoEle = {
  title: string | JSX.Element;
  path: string;
};

type LMMainFooterColInfo = {
  title: string;
  info: LMMainFooterColInfoEle[];
  path: string;
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
  isMobile: boolean;
  columnsInfo: LMMainFooterColInfo[];
  socialMedia: LMMainFooterSocialMedia[];
  credits: string[];
};

type LMMobile = {
  isMobile: boolean;
}

export {
  LMMainFooterColInfoEle,
  LMMainFooterColInfo,
  LMMainFooterColInfoProps,
  LMMainFooterSocialMedia,
  LMMainFooterProps,
};
