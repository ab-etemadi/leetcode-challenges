function searchInsert(nums: number[], target: number): number {
  let res = nums.findIndex((num) => num >= target);
  if (res === -1) {
    for (let index = 0; index < nums.length; index++) {
      const num = nums[index];
      if (num > target) {
        res = index;
        break;
      }
    }
  }

  return res === -1 ? nums.length : res;
}
