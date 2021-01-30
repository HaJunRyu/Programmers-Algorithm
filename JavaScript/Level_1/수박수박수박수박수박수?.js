function solution(n) {
  const keyword = '수박';
  return keyword.repeat(n).slice(0, n);
}

console.log(solution(3)); // 수박수
console.log(solution(4)); // 수박수박
