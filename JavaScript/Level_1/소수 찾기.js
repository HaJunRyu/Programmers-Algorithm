// 처음 코드 결과는 잘 나오지만 숫자가 엄청나게 커지면 효율성 테스트에서 떨어지게 된다.
function firstSolution(n) {
  const arr = [];

  for (let i = 2; i <= n; i++) arr.push(i);

  return arr.filter(v => {
    for (let i = 2; i < v; i++) {
      if (v % i === 0) return false;
    }
    return true;
  }).length;
}

// 에라토스테네스의 체 알고리즘을 참고하여 짠 코드 (효율성 테스트 통과)
// https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4
function solution(n) {
  if (n <= 1) return 0;

  const arr = Array.from({ length: n + 1 }, () => true);

  [arr[0], arr[1]] = [false, false];

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  console.log(arr);
  return arr.filter(v => v).length;
}

console.log(firstSolution(10)); // 4
console.log(solution(5)); // 3
