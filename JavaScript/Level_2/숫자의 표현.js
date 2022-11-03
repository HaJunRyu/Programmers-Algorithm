// 효율성 테스트 통과 X
// O(n²)
function solution(n) {
  let answer = 1;

  for (let i = 0; i < n; i++) {
    let number = 0;
    for (let j = i + 1; j < n; j++) {
      number += j;
      if (number === n) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

// 효율성 테스트 통과 O
// O(n²) - 예외케이스
// Input 9억 기준 Node.js런타임 약 11.5s 소요
function solution2(n) {
  let answer = 1;

  for (let i = 0; i < n; i++) {
    let number = 0;

    for (let j = i + 1; j < n; j++) {
      number += j;
      if (number === n) {
        answer++;
        break;
      } else if (number > n) {
        break;
      }
    }
  }

  return answer;
}

// 공교롭게도 n을 연속되는 자연수로 표현할 수 있는 경우의 수는 n의 홀수인 약수 갯수와 같다.
// 그러므로 O(n)으로도 풀 수 있다. 하지만 문제만 보고 이렇게 풀기는 어려울듯...
// Input 9억 기준 Node.js런타임 약 1.1s 소요
function solution3(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }
  return answer;
}
