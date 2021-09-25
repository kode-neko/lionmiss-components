import { TFunction } from "i18next";

const createPath = (pathList: string[], t: TFunction): string =>
  pathList.map((ele) => t(ele)).join("/");

const patterCreditCard = (e: React.KeyboardEvent) => {
  const key = e.key;
  switch (key) {
    case "Backspace":
      return true;
    case "Delete":
      return true;
    case "Del":
      return true;
    case "Alphanumeric":
      return true;
    default:
      return false;
  }
};

export { createPath, patterCreditCard };
