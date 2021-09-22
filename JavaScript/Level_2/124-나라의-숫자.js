// 보통 3진법은 1 -> 1, 2 -> 2, 3 -> 10으로 변환된다.
// 하지만 124 나라는 0을 쓰지 않고 3 -> 4로 변환된다.
// 이걸 나머지 연산하여 배열의 index로 접근하게끔 풀어본다면 3진수는 [0, 1, 2], 124나라는 [4, 1, 2]로 표현하여 접근할 수 있을것이다.
// 일반적인 진법 계산 알고리즘으로 생각해보자.
// 3진법에서 3을 변활할땐 처음에 0번째 인덱스에 접근하여 0을 가져오고 3 / 3을 하여 몫 1을 가지고 다시 1번째 인덱스에 접근하여 1을 가져와 기존의 0의 앞에 붙혀준다. 그럼 "10"이 나온다.
// 하지만 124나라는 3을 변환할때 처음에 0번째 인덱스에 접근하여 4를 가져오고 3 /3 을 하여 몫 1을 가지고 다시 1번째 인덱스에 접근해 14를 도출하는데 틀린값이다.
// 그래서 124나라는 진법 변환 과정에서 인수분해를 할때 3의 나머지가 0인 수는 몫에서 1을 차감시켜줘야한다.

const radix124 = [4, 1, 2];

function solution(n) {
  let result = '';

  while (n > 0) {
    result = radix124[n % 3] + result;
    n = n % 3 === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
  }

  return result;
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4 -> 14
console.log(solution(4)); // 11
console.log(solution(5)); // 12
console.log(solution(6)); // 14 -> 24
console.log(solution(7)); // 21
console.log(solution(8)); // 22
console.log(solution(9)); // 24 -> 144
console.log(solution(10)); // 41
console.log(solution(11)); // 42
console.log(solution(12)); // 44 -> 114
// 일반적인 3진법 계산으로는 나머지가 0일때 원하는 결과와 다른값이 나옴, 즉 숫자 4를 사용 할 경우가 3진법과 다른 상황임
// 그럼 나눠줄때 만약 3일 경우 3 / 3이면 1이기 때문에 while문이 한번 더 도는데 이걸 -1 해주어 탈출시켜줌
// 다른 예시로 12일때는 12 / 3은 4인데 4 % 3은 1이다. 그리고 4 / 3 은 1이고 그럼 114가 나오는데 원하는 결과가 아님

// 재귀 - 내 기준 가독성은 별로 안좋은것 같다
// n이 0이 될때까지 재귀적으로 함수를 반복한다.
// 어차피 2 / 3 = 0, 1 / 3 = 0이기 때문에 몫을 계산을 할때 n에서 1을 빼준 뒤 시작한다.
const solution2 = n => (n > 0 ? solution2(Math.floor((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3] : '');

console.log(solution2(12)); // 44
