// 효율성 테스트 통과X
function solution(s) {
  const copyS = s.replace('()', '');

  return copyS.includes('()') ? solution(copyS) : copyS.length === 0;
}

// 효율성 테스트 통과X
function solution2(s) {
  if (s.length % 2 !== 0 || s[0] === ')') return false;

  let copyS = s;

  while (copyS.includes('()')) {
    copyS = copyS.replaceAll('()', '');
  }

  return copyS.length === 0;
}

// 이유는 모르겠지만 stack구조로 풀이하니 효율성 테스트 통과 O
function solution3(s) {
  if (s.length % 2 !== 0 || s[0] === ')') return false;

  const stack = [];

  for (let bracket of s) {
    if (bracket === '(') stack.push(s);
    else stack.pop();
  }

  return stack.length === 0;
}
