function solution(new_id) {
  let answer = new_id;

  answer = answer
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a');

  if (answer.length >= 16) {
    answer = answer.slice(0, 15).replace(/\.$/, '');
  }

  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }
  return answer;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // bat.y.abcdefghi
console.log(solution('=.=')); // aaa
