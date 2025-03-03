function isBadVersion(n: number): boolean {
  return n >= 3;
}

// 外側の関数が内側に関数を返すように実装
const solution =
  <T extends (v: number) => boolean>(isBadversion: T) =>
  (n: number): number => {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2); // ここ注意
      if (isBadversion(mid)) {
        if (mid === 1 || (mid - 1 > 0 && !isBadversion(mid - 1))) {
          return mid;
        }
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };

const firstBadVersion = solution(isBadVersion);
const result3 = firstBadVersion(10);
console.log(result3);
