function solution(phoneNumber) {
  return phoneNumber.split('').map((v, i, arr) => (i < arr.length - 4 ? '*' : v)).join('');
}

console.log(solution('01077777777')); // *******7777
