import { DateTimeFormatter, LocalDate } from "@js-joda/core";

const DATE_NOW = LocalDate.now();
const FORMAT_DATE_YY = "yy";

function getLastDigitsYear(date = DATE_NOW): number {
  const formatter = DateTimeFormatter.ofPattern(FORMAT_DATE_YY);
  return Number(date.format(formatter));
}

export default getLastDigitsYear;
