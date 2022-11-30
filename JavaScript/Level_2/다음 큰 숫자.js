// 첫 문제 풀이는 replaceAll로 풀었었는데 효율성 테스트가 말도 안되는 격차를 보여줌
// 단순히 밑에 풀이처럼 replace를 쓰고 정규표현식에 g플래그를 사용하니 성능이 월등히 올라갔음 2.x ms -> 0.0x ms
function solution(n) {
  const zeroRemovedN = n.toString(2).replace(/0/g, '');

  let nextBiggerN = n + 1;
  let zeroRemovedNextBiggerN = nextBiggerN.toString(2).replace(/0/g, '');

  while (zeroRemovedN !== zeroRemovedNextBiggerN) {
    nextBiggerN += 1;
    zeroRemovedNextBiggerN = nextBiggerN.toString(2).replace(/0/g, '');
  }

  return nextBiggerN;
}
