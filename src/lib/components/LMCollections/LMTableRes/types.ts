type LMTableColumn<T extends Record<string, unknown>> = {
  key: string;
  title: string | JSX.Element;
  transform?: (data: T) => JSX.Element;
  width?: string;
};

type LMTableProps<T extends Record<string, unknown>> = {
  columns: LMTableColumn<T>[];
  data: T[];
};

type LMTableResProps<T extends Record<string, unknown>> = {
  columns: LMTableColumn<T>[];
  data: T[];
};

export { LMTableColumn, LMTableProps, LMTableResProps };
