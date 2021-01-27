function solution(s, n) {
  const charCode = s.split('').map(char => {
    let code = char.charCodeAt();
    if (code === 32) return code;
    if (code >= 65 && code <= 90) {
      code += n;
      code = code > 90 ? code - 26 : code;
    } else if (code >= 97 && code <= 122) {
      code += n;
      code = code > 122 ? code - 26 : code;
    }
    return code;
  });
  return charCode.map(code => String.fromCharCode(code)).join('');
}

console.log(solution('AB', 1)); // BC
console.log(solution('z', 1)); // a
