function solution(s) {
  return s.length % 2 !== 0 ? s[Math.floor(s.length / 2)] : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}

console.log(solution('abc')); // b
console.log(solution('abcdeffm')); // de
