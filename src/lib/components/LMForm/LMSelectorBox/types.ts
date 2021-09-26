type LMBoxProps = {
  option: string;
  selected?: boolean;
  onSelect?: () => void;
};

type LMSelectorBoxProps = {
  options: string[];
  selected?: string;
  onSelect: (opt: string) => void;
};

export { LMBoxProps, LMSelectorBoxProps };
