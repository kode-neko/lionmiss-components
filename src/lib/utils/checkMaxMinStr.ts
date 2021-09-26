function checkMaxMinStr(val: string, min: number, max: number): boolean {
  const numVal = Number(val);
  if (numVal >= min && numVal <= max) return true;
  return false;
}

export default checkMaxMinStr;
