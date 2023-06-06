function plusOne(digits: number[]): number[] {
  let number = parseInt(digits.join(""));

  return (number + 1)
    .toString()
    .split("")
    .map((num) => parseInt(num));
}
