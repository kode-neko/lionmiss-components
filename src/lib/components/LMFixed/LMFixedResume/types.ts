type LMFixedResumeLineInfo = {
  label: string;
  value?: number;
  main?: boolean;
  negative?: boolean;
};

type LMFixedResumeProps = {
  lang: string;
  currency: string;
  total?: number;
  promo?: number;
  taxes?: number;
  shipping?: number;
  onClickPrev: () => void;
  onClickNext: () => void;
};

export { LMFixedResumeLineInfo, LMFixedResumeProps };
