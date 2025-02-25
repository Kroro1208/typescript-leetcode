function validMountainArray(Arry: number[]): boolean {
  let i = 1; // 増えているか減っているかをチェックするからi = 0ではない

  // increasing
  while (i < Arry.length && Arry[i] > Arry[i - 1]) {
    i++;
  }

  // already checked Array
  if (i === 1 || i === Arry.length) {
    return false;
  }

  // decreasing
  while (i < Arry.length && Arry[i] < Arry[i - 1]) {
    i++;
  }

  return i === Arry.length;
}

const resultArry = validMountainArray([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(resultArry);
