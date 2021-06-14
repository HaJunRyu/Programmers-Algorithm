function solution(n) {
  const stringN = n.toString(10);
  const arrN = stringN.split('');
  return arrN.reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution(123));
console.log(solution(9832));
