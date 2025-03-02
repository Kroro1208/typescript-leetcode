function findFirst(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      // 左端を調べたいのでmid-1を条件にする
      if (nums[mid - 1] !== target) {
        return mid;
      }
      right = mid - 1; // ここが重要
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function findLast(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      // 右端を調べたいのでmid+1を条件にする
      if (nums[mid + 1] !== target) {
        return mid;
      }
      left = mid + 1; // ここが重要
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function searchRange(nums: number[], target: number): number[] {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const first = findFirst(sortedNums, target);
  const last = findLast(sortedNums, target);
  return [first, last];
}

const sewarchResult = searchRange([43, 66, 23, 88, 90, 22, 11, 66, 89], 66);
console.log(sewarchResult);
