type LMInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  infoHint?: string;
  errorHint?: string;
  correctHint?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export type { LMInputProps };
