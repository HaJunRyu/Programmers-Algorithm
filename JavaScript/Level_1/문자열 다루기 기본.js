function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return s.split('').every(v => !Number.isNaN(+v));
}

console.log(solution('a234'));
console.log(solution('123456'));
// 지수의 형태로 넘기면 문자열 전체를 암묵적 타입변환 했을때 NaN이 되지 않음
console.log(solution('1e34'));
