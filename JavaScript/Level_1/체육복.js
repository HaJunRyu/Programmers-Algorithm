// // 체육복을 분실하지 않은 학생 중 여분의 체육복을 가진 차집합을 구하기 위한 함수
// Set.prototype.difference = function (iterable) {
//   const set = new Set(iterable);
//   for (value of set) {
//     if (this.has(value)) this.delete(value);
//   }
//   return this;
// };

// function solution(n, lost, reserve) {
//   const lostSet = new Set(lost);
//   const reserveSet = new Set(reserve);

//   reserveSet.difference(lost);
//   lostSet.difference(reserve);

//   lost = [...lostSet];
//   reserve = [...reserveSet];

//   const student = Array.from({ length: n }, (_, i) => i + 1);

//   for (studentValue of student) {
//     for (reserveValue of reserveSet) {
//       if (studentValue === reserveValue - 1 || studentValue === reserveValue + 1) {
//         reserveSet.delete(student);
//       }
//     }
//   }

//   console.log(reserveSet);

//   // console.log(
//   //   student.filter(
//   //     (studentNum, i, arr) =>
//   //       !lost.every(lostNum => lostNum === studentNum) &&
//   //       reserve.every(reserveV => reserveV - 1 === studentNum || reserveV + 1 === studentNum)
//   //   )
//   // );

//   const answer = 0;
//   // return answer;
// }

// console.log(solution(5, [2, 4], [2, 3, 5]));
// console.log(solution(3, [3], [2]));

// 다른 시도
function solution(n, lost, reserve) {
  let student = new Array(n).fill(1);

  student = student.map((gymSuit, index) =>
    lost.find(lostGymSuit => lostGymSuit === index + 1) ? gymSuit - 1 : gymSuit
  );

  student = student.map((gymSuit, index) =>
    reserve.find(reserveGymSuit => reserveGymSuit === index + 1) ? gymSuit + 1 : gymSuit
  );

  student.forEach((gymSuit, index) => {
    if (gymSuit < 1) {
      if (student[index - 1] > 1) {
        student[index - 1] -= 1;
        student[index] += 1;
      } else if (student[index + 1] > 1) {
        student[index + 1] -= 1;
        student[index] += 1;
      }
    }
  });

  return student.filter(gymSuit => gymSuit).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(3, [3], [1]));
