function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 0; i < count; i++) {
    totalPrice += price * (i + 1);
  }
  return money - totalPrice < 0 ? totalPrice - money : 0;
}

console.log(solution(3, 20, 4)); // 10
console.log(solution(3, 31, 5)); // 14
console.log(solution(100, 550, 3)); // 50
console.log(solution(100, 50, 1)); // 50
console.log(solution(100, 110, 1)); // 0
