type LMStepperProps = {
  value: number;
  min: number;
  max: number;
  onMinus?: (val: number) => void;
  onMax?: (val: number) => void;
};

export { LMStepperProps };
