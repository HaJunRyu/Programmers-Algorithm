// 첫 코드
function solution(start, end) {
  if (start > end) [start, end] = [end, start];
  let result = 0;
  for (let i = start; i <= end; i++) result += i;
  return result;
}

// 배열을 활용하여 풀어봄
function solution2(start, end) {
  if (start > end) [start, end] = [end, start];
  return Array.from({ length: end - start + 1 }, () => start++).reduce((cur, v) => cur + v, 0);
}

console.log(solution2(3, 5)); // 12
console.log(solution2(10, 2)); // 54
console.log(solution2(3, 3)); // 3
