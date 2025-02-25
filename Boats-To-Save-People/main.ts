function boatsToSavePeople(people: number[], limit: number): number {
  const sortedPeople = people.sort((a, b) => a - b); //[...people].sort((a. b) => a - b) コピーしてからソートすることも考慮
  let smallest = 0;
  let biggest = sortedPeople.length - 1;
  let boats = 0;

  while (biggest > smallest) {
    if (sortedPeople[biggest] + sortedPeople[smallest] <= limit) {
      biggest--;
      smallest++;
    } else {
      biggest--; // 重い人と軽い人の合計が限界の重さを超えている場合
    }
    boats++; // どちらの場合もボートは+1
  }
  return boats;
}

const result = boatsToSavePeople([51, 62, 45, 80, 15, 90, 67, 55], 100);
console.log(result);
