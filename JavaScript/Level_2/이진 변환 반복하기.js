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
