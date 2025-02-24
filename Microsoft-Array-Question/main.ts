function maxArea(heights: number[]) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(heights[left], heights[right]) * (right - left)
    );

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
