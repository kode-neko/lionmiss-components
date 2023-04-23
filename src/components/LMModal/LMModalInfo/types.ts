type LMModalInfoProps = {
  visible: boolean;
  title: string;
  content: JSX.Element;
  ok?: string;
  cancel?: string;
  footer?: JSX.Element;
  onClickOk?: () => void;
  onClickCancel?: () => void;
  onClickClose?: () => void;
};

export type { LMModalInfoProps };
