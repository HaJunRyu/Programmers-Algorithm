// 효율성 테스트 통과 X
function solution(s) {
  const copyS = s.replace('()', '');

  return copyS.includes('()') ? solution(copyS) : copyS.length === 0;
}

// 효율성 테스트 통과 X
function solution2(s) {
  if (s.length % 2 !== 0) return false;

  let copyS = s;

  while (copyS.includes('()')) {
    copyS = copyS.replaceAll('()', '');
  }

  return copyS.length === 0;
}
