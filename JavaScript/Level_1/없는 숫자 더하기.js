const maxNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, number) => acc + number, 0);

function solution(numbers) {
  const sumNumber = numbers.reduce((acc, number) => acc + number, 0);
  return maxNumber - sumNumber;
}
