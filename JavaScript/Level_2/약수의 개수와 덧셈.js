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
