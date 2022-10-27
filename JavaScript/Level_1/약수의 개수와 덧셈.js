// O(n²)
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let divisorCount = 0;
    for (let j = i; j > 0; j--) {
      if (i % j === 0) divisorCount += 1;
    }

    answer += divisorCount % 2 === 0 ? i : -i;
  }

  return answer;
}

// O(n)
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // 약수의 개수가 홀수라면 제곱근이 실수이다.
    answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
  }

  return answer;
}
