// 재귀 효율성 테스트 통과 X
function solution(n) {
  function pibonacci(n) {
    if (n < 2) return n;
    return pibonacci(n - 1) + pibonacci(n - 2);
  }
  return pibonacci(n) % 1234567;
}

// 효율성 테스트 통과 O
function solution2(n) {
  const pibonacci = [0, 1];

  for (let i = 0; i < n; i++) {
    pibonacci[i + 2] = (pibonacci[i] + pibonacci[i + 1]) % 1234567;
  }

  return pibonacci[n];
}
