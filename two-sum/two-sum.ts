function twoSum(numbers: number[], target: number): number[] {
  const numberMap: { [key: number]: number } = {};
  for (const [index, number] of numbers.entries()) {
    const difference = target - number;
    if (numberMap[difference] !== undefined) {
      return [numberMap[difference], index];
    }
    numberMap[number] = index;
  }
  return []; // No solution found
}
