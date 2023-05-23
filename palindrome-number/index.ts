function isPalindrome(x: number): boolean {
  const reverseNumber = parseInt(String(x).split("").reverse().join(""));
  return x === reverseNumber;
}
