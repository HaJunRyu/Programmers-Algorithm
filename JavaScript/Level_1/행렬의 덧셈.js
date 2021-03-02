// first
function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const depth = [];
    for (let j = 0; j < arr1[i].length; j++) {
      depth.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(depth);
  }
  return result;
}

// ES6 refactor
const solution2 = (arr1, arr2) => arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]));
console.log(solution2([[1, 2], [2, 3]], [[3, 4], [5, 6]]));
