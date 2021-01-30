function solution(a, b) {
  const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let result = b;

  for (let i = 1; i < a; i++) {
    switch (i) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12: result += 31; break;
      case 4: case 6: case 9: case 11: result += 30; break;
      case 2: result += 29; break;
      default: break;
    }
  }

  return day[result % 7];
}

console.log(solution(1, 1)); // FRI
console.log(solution(5, 24)); // TUE
console.log(solution(3, 3)); // THU
