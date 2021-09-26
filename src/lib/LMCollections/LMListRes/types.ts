type LMListResProps<T extends Record<string, unknown>> = {
  data: T[];
  transform: (data: T) => JSX.Element;
};

export { LMListResProps };
