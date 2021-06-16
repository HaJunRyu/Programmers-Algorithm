function solution(n) {
  const ternaryArr = n.toString(3).split('');
  return ternaryArr.reduce((acc, cur, i) => acc + 3 ** i * cur, 0);
}

console.log(solution(45));
console.log(solution(125));
