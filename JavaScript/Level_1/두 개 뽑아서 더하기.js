function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) result.push(numbers[i] + numbers[j]);
    }
  }
  return result.filter((v, i, arr) => arr.indexOf(v) === i).sort((num1, num2) => num1 - num2);
}

console.log(solution([2, 1, 3, 4, 1])); // [ 2, 3, 4, 5, 6, 7 ]
