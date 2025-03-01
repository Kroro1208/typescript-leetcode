// 最長の重複のない部分文字列の長さを出力する
type TextObj = Record<string, number>; // {[key: string]: number} と同じ
function longestSubstrings(text: string): number {
  const textObj: TextObj = {};
  let left = 0;
  let right = 0;
  let answer = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] in textObj) {
      left = Math.max(left, textObj[text[i]] + 1); // 重複した文字があった場合、leftを前に進める処理
    }
    right += 1;
    textObj[text[i]] = i;
    answer = Math.max(right - left, answer); // 探索結果の最大値を取る
  }

  return answer;
}

console.log(longestSubstrings("electrocardiographic"));
