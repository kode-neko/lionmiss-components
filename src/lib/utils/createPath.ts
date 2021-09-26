import { TFunction } from "i18next";

const createPath = (pathList: string[], t: TFunction): string =>
  pathList.map((ele) => t(ele)).join("/");

export default createPath;
