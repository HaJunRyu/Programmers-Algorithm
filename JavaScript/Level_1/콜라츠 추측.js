const TRY_CNT = 500;

// for
function solution(num) {
  for (let cnt = 0; cnt < TRY_CNT; cnt++) {
    if (num === 1) return cnt;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return -1;
}

// while
function solution2(num) {
  let cnt = 0;
  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    cnt++;
    if (cnt === TRY_CNT) return -1;
  }
  return cnt;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
console.log(solution2(6)); // 8
console.log(solution2(16)); // 4
console.log(solution2(626331)); // -1
