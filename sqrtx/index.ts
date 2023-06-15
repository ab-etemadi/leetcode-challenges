function mySqrt(x: number): number {
  let result: number;

  let i = 1;
  while (i > 0) {
    result = i * i;
    if (result > x) {
      break;
    }
    i++;
  }
  return i - 1;
}
