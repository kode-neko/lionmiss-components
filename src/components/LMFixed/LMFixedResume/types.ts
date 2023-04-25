type LMFixedResumeLineInfo = {
  label: string;
  value?: number;
  main?: boolean;
  negative?: boolean;
};

type LMFixedResumeProps = {
  lang: string;
  currency: string;
  infoList: LMFixedResumeLineInfo[];
  btnLabelPrev: string;
  btnLabelNext: string;
  onClickPrev: () => void;
  onClickNext: () => void;
};

export type { LMFixedResumeLineInfo, LMFixedResumeProps };
