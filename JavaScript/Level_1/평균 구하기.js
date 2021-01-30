const solution = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length;

console.log(solution([1, 2, 3, 4])); // 2.5
