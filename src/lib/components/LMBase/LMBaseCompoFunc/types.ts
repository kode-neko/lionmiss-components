import { LMButtonProps } from "../../LMForm/LMButton/types";

type LMBtnSize = Partial<LMButtonProps>;

interface LMBaseCompoFuncBtn extends Pick<LMButtonProps, "main" | "second"> {
  key: string;
  name: string | JSX.Element;
  alt?: string;
  title?: string;
  onClick: () => void;
}

type LMBaseCompoFuncProps = {
  title: string;
  btnsHeader: LMBaseCompoFuncBtn[];
  btnsFooter: LMBaseCompoFuncBtn[];
};

export { LMBtnSize, LMBaseCompoFuncBtn, LMBaseCompoFuncProps };
