function solution(s) {
  const splitStr = s.split(' ');
  const numbers = splitStr.map(str => Number(str));

  const maxNum = Math.max(...numbers);
  const minNum = Math.min(...numbers);

  return `${minNum} ${maxNum}`;
}
