type LMInputProps = {
  label?: string;
  value?: string;
  infoHint?: string;
  errorHint?: string;
  correctHint?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export { LMInputProps };
