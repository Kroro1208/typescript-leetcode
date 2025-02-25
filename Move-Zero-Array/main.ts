function moveZeroBack(nums: number[]): void {
  let zeroIndex = 0;
  const n = nums.length;
  for (let currentIndex = 0; currentIndex < n; currentIndex++) {
    if (nums[currentIndex] !== 0) {
      nums[zeroIndex] = nums[currentIndex];
      zeroIndex++;
    }
  }

  for (let i = zeroIndex; i < n; i++) {
    nums[i] = 0;
  }
}

const arry = [66, 0, 7, 35, 69, 0, 12, 39, 0, 33, 178];
moveZeroBack(arry);
console.log(arry);

// 0を移動させたあと0以外をsortしたい場合
function moveZeroAndSort(nums: number[]): void {
  // ステップ1: 0を配列の後ろに移動
  let zeroIndex = 0;
  const n = nums.length;

  for (let currentIndex = 0; currentIndex < n; currentIndex++) {
    if (nums[currentIndex] !== 0) {
      nums[zeroIndex] = nums[currentIndex];
      zeroIndex++;
    }
  }

  // ステップ2: 0以外の部分だけをソート
  const nonZeroSlice = nums.slice(0, zeroIndex).sort((a, b) => a - b);

  // ステップ3: ソートした部分を元の配列に戻す
  for (let i = 0; i < zeroIndex; i++) {
    nums[i] = nonZeroSlice[i];
  }

  // ステップ4: 残りを0で埋める
  for (let i = zeroIndex; i < n; i++) {
    nums[i] = 0;
  }
}

const arry2 = [66, 0, 7, 35, 69, 0, 12, 39, 0, 33, 178];
moveZeroAndSort(arry2);
console.log(arry2); // [7, 12, 33, 35, 39, 66, 69, 178, 0, 0, 0]
