// 처음 통과한 코드 아주 마음에 안들지만 이런생각을 한거에 의미를....
function solution(answers) {
  let soopojas = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  const result = [];

  soopojas = soopojas.map(pattern => pattern.join('').repeat(Math.ceil(answers.length / pattern.length)).split(''));

  for (let i = 0; i < soopojas.length; i++) {
    for (let j = 0; j < soopojas[i].length; j++) {
      soopojas[i][j] = +soopojas[i][j];
    }
  }

  soopojas = soopojas.map(pattern => answers.filter((answer, index) => answer === pattern[index]).length);

  soopojas.forEach((answerCnt, i) => {
    if (answerCnt === Math.max(...soopojas)) result.push(i + 1);
  });
  return result;
}

// %만 추가하여 join, repeat, split...후 숫자로 바꿔주는 쓸데없는 동작을 없애줌
function solution2(answers) {
  let soopojas = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  const result = [];

  soopojas = soopojas.map(pattern => answers.filter((answer, index) => answer === pattern[index % pattern.length]).length);

  soopojas.forEach((answerCnt, i) => {
    if (answerCnt === Math.max(...soopojas)) result.push(i + 1);
  });
  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [ 1 ]
console.log(solution2([1, 3, 2, 4, 2])); // [ 1, 2, 3 ]
console.log(solution2([2, 3, 2, 4, 2, 2, 1, 2, 3, 4, 5])); // [ 2, 3 ]
