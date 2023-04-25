interface LMMenuOpt {
  id: string,
  title: string | JSX.Element;
  submenu?: LMMenuOpt[];
  path?: string[];
  res?: boolean;
}

export type { LMMenuOpt };
