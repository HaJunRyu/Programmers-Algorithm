function solution(s) {
  const lower = s.toLowerCase();
  let [p, y] = [0, 0];
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === 'p') p++;
    else if (lower[i] === 'y') y++;
  }
  return p === y;
}

console.log(solution('pPoooyY')); // true
console.log(solution('Pyy')); // false
