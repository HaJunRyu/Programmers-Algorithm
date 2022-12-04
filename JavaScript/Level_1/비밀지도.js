// 첫번째 풀이, 통과O 하지만 반복이 너무 많음..
function solution(n, arr1, arr2) {
  const changeToBinary = number => {
    const binary = number.toString(2);

    return binary.length !== n ? '0'.repeat(n - binary.length) + binary : binary;
  };

  const binaryArr1 = arr1.map(changeToBinary);
  const binaryArr2 = arr2.map(changeToBinary);

  const answer = binaryArr1.map((binary, index) => {
    let secretCode = '';

    for (let i = 0; i < binary.length; i++) {
      secretCode += +binary[i] || +binaryArr2[index][i] ? '#' : ' ';
    }
    return secretCode;
  });

  return answer;
}

// 두번째 풀이, 비트 OR(|) 연산자를 이용하여 arr1과 arr2를 비교하는 반복 로직을 제거해줌
function solution2(n, arr1, arr2) {
  const changeToBinary = number => {
    const binary = number.toString(2);

    return binary.padStart(n, '0');
  };

  return arr1.map((number, index) => {
    const binary = changeToBinary(number | arr2[index]);
    return binary.replace(/0|1/g, v => (+v ? '#' : ' '));
  });
}

// 세번째 풀이, 두번째에서 replace의 대체 구문에 함수를 전달하는 대신 체이닝으로 원시값을 대입, 시간복잡도 내려감
function solution3(n, arr1, arr2) {
  const changeToBinary = number => {
    const binary = number.toString(2);

    return binary.padStart(n, '0');
  };

  return arr1.map((number, index) => {
    const binary = changeToBinary(number | arr2[index]);
    return binary.replace(/0/g, ' ').replace(/1/g, '#');
  });
}

const length = 10_000;
const arr1 = Array.from({ length }, (_, i) => i);
const arr2 = Array.from({ length }, (_, i) => length - i);

// solution(length, arr1, arr2); // 10.076s
// solution2(length, arr1, arr2); // 3.219s
solution3(length, arr1, arr2); // 2.516s
