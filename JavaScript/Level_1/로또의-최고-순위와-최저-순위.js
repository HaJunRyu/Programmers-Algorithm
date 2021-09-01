const RANK = [6, 6, 5, 4, 3, 2, 1];

function solution(lottos, win_nums) {
  const zeroCnt = lottos.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);
  if (zeroCnt === 6) return [1, 6];

  const matchCnt = lottos.reduce((acc, cur) => (win_nums.includes(cur) ? acc + 1 : acc), 0);

  const bestRanking = RANK[matchCnt + zeroCnt];
  const worstRanking = RANK[matchCnt];

  return [bestRanking, worstRanking];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([1, 0, 0, 0, 38, 42], [38, 19, 20, 40, 15, 25]));
