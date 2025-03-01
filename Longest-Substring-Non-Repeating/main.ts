// 最長の重複のない部分文字列の長さを出力する
function longestSubstrings(text: string): number {
  const textObj: { [key: string]: number } = {};
  let left = 0;
  let right = 0;
  let answer = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] in textObj) {
      left = Math.max(left, textObj[text[i]] + 1);
    }
    right += 1;
    textObj[text[i]] = i;
    answer = Math.max(right - left, answer);
  }

  return answer;
}

console.log(longestSubstrings("electrocardiographic"));
