function completeZerosStrNum(number: string, digits: number): string {
  const numberZeros = digits - number.length;
  return Array(numberZeros).fill(0).concat(number).join("");
}

export default completeZerosStrNum;
