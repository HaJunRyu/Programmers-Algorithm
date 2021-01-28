const solution = (x, n) => Array.from({ length: n }, (_, i) => x * (i + 1));

console.log(solution(2, 5)); // [ 2, 4, 6, 8, 10 ]
