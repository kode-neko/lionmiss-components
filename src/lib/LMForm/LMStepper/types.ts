type LMStepperProps<T> = {
  list: T[];
  selected: T;
  onSelect: (ele: T) => void;
};

export { LMStepperProps };
