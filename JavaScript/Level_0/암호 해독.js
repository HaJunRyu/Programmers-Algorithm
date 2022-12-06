function solution(cipher, code) {
  let answer = '';

  for (let i = 0; i < cipher.length; i++) {
    answer += (i + 1) % code === 0 ? cipher[i] : '';
  }

  return answer;
}

function solution2(cipher, code) {
  let answer = '';

  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }

  return answer;
}
