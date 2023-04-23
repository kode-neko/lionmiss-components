const ONLY_NUMBERS = /\d/;
const ONLY_4_NUMBERS = /\d{4}$/;

const checkNumberKey = (key: string): boolean => ONLY_NUMBERS.test(key);
const checkDeleteKey = (key: string): boolean =>
  ["Del", "Delete", "Backspace"].includes(key);

const checkOnly4Digits = (val: string): boolean => ONLY_4_NUMBERS.test(val);

export { checkNumberKey, checkDeleteKey, checkOnly4Digits };
