function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result += i;
  }
  return result;
}

// 그냥 배열 메서드 연습용 시간복잡도에서 불리할듯하다. 공간복잡도도 불리...
function solutionArr(n) {
  return Array.from({ length: n }, (v, i) => i + 1).filter(v => n % v === 0).reduce((acc, cur) => acc + cur);
}

console.log(solution(12)); // 28
console.log(solutionArr(12)); // 28
