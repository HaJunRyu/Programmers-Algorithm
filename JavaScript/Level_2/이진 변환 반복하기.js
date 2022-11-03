function solution(s, repeatCnt = 1, zeroCnt = 0) {
  let binaryStr = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      binaryStr += '1';
    } else {
      zeroCnt += 1;
    }
  }

  if (binaryStr === '1') return [repeatCnt, zeroCnt];

  binaryStr = binaryStr.length.toString(2);

  return solution(binaryStr, repeatCnt + 1, zeroCnt);
}

function solution2(s, repeatCnt = 1, zeroRemoveCnt = 0) {
  const oldLength = s.length;
  s = s.replaceAll('0', '');

  zeroRemoveCnt += oldLength - s.length;

  if (s === '1') return [repeatCnt, zeroRemoveCnt];

  s = s.length.toString(2);

  return solution(s, repeatCnt + 1, zeroRemoveCnt);
}
