import { DateTimeFormatter, LocalDate } from "@js-joda/core";
import { TFunction } from "i18next";

const ONLY_NUMBERS = /\d/;
const ONLY_4_NUMBERS = /\d{4}$/;
const DATE_NOW = LocalDate.now();
const FORMAT_DATE_YY = "yy";

const createPath = (pathList: string[], t: TFunction): string =>
  pathList.map((ele) => t(ele)).join("/");

const checkNumberKey = (key: string): boolean => ONLY_NUMBERS.test(key);

const checkDeleteKey = (key: string): boolean =>
  ["Del", "Delete", "Backspace"].includes(key);

const checkOnly4Digits = (val: string): boolean => ONLY_4_NUMBERS.test(val);

function getLastDigitsYear(date = DATE_NOW): number {
  const formatter = DateTimeFormatter.ofPattern(FORMAT_DATE_YY);
  return Number(date.format(formatter));
}

function completeZerosStrNum(number: string, digits: number): string {
  const numberZeros = digits - number.length;
  return Array(numberZeros).fill(0).concat(number).join("");
}

function checkMaxMinStr(val: string, min: number, max: number): boolean {
  const numVal = Number(val);
  if (numVal >= min && numVal <= max) return true;
  return false;
}

export {
  createPath,
  checkNumberKey,
  checkDeleteKey,
  checkOnly4Digits,
  getLastDigitsYear,
  completeZerosStrNum,
  checkMaxMinStr,
};
