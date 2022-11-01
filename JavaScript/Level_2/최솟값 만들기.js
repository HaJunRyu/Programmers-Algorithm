// 효율성 테스트 통과 X
function solution(A, B) {
  let answer = 0;

  const originLength = A.length;

  for (let i = 0; i < originLength; i++) {
    const aMinValue = Math.min(...A);
    const bMaxValue = Math.max(...B);

    answer += aMinValue * bMaxValue;

    const aMinValueIndex = A.indexOf(aMinValue);
    const bMaxValueIndex = B.indexOf(bMaxValue);

    A.splice(aMinValueIndex, 1);
    B.splice(bMaxValueIndex, 1);
  }

  return answer;
}

// 효율성 테스트 통과 O
function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, number, index) => acc + number * B[index], 0);
}
