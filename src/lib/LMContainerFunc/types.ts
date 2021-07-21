import { LMButtonProps } from "../LMButton/LMButton";

type LMBtnSize = Pick<LMButtonProps, "small" | "medium">;

interface LMContainerFuncBtn extends Pick<LMButtonProps, "main" | "second"> {
  key: string;
  name: string | JSX.Element;
  alt?: string;
  title?: string;
  onClick: () => void;
}

type LMContainerFuncProps = {
  title: string;
  btnsHeader: LMContainerFuncBtn[];
  btnsFooter: LMContainerFuncBtn[];
};

export { LMBtnSize, LMContainerFuncBtn, LMContainerFuncProps };
