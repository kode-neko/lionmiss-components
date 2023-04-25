import { LMMainBarConfig, LMMainFooterConfig } from "../../../types";

interface LMBaseLayoutProps {
  mainMenu: LMMainBarConfig;
  mainFooter: LMMainFooterConfig;
  xtraFooterRes?: JSX.Element;
}

export type { LMBaseLayoutProps };
