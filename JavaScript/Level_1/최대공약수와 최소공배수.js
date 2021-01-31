// 정말 떠오르는대로 짜본 코드 리팩토링 필수
function solution(n, m) {
  const result = [];
  const gcd = [];
  const nArr = [];
  const mArr = [];
  for (let i = 1; i <= Math.max(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd.push(i);
    nArr.push(n * i);
    mArr.push(m * i);
  }

  result.push(Math.max(...gcd));

  for (let i = 0; i < nArr.length; i++) {
    for (let j = 0; j < mArr.length; j++) {
      if (nArr[i] === mArr[j]) {
        result.push(nArr[i]);
        return result;
      }
    }
  }
}

console.log(solution(3, 12)); // [3, 12]
