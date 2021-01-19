function solution(x) {
  x += '';
  let combine = 0;
  for (let i = 0; i < x.length; i++) combine += +x[i];
  return +x % combine === 0;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(18)); // true
