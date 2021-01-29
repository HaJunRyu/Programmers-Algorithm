function solution(n) {
  const sqn = Math.sqrt(n);
  if (!Number.isInteger(sqn)) return -1;
  return (sqn + 1) ** 2;
}

console.log(solution(121)); // 144
