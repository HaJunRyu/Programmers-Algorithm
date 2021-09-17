const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  numbers.forEach((v, i) => (s = s.replace(v, i)));

  return isNaN(+s) ? solution(s) : +s;
}

console.log(solution('one4seveneight')); // 1478
console.log(solution('oneone4seveneight')); // 11478
