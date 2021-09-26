type LMComment = {
  id: string;
  comment: string;
  date: Date;
  ratting: number;
  measures: LMMeasures;
  user: LMUser;
  imgs: LMImgAttr[];
};

export { LMComment };
