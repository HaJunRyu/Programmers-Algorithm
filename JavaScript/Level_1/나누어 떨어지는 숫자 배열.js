function solution(arr, divisor) {
  const result = arr.filter(v => v % divisor === 0);
  return result.length ? result.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([3, 2, 6], 10));
