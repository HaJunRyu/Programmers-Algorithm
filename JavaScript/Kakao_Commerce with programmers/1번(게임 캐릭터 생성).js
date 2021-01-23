function solution(n, record) {
  if (n < 1 || n > 9) throw new Error('');
  const result = [];
  for (let i = 1; i <= n; i++) {
    const temp = [];
    mid: for (let j = 0; j < record.length; j++) {
      const recordSplit = record[j].split(' ');
      for (let k = 0; k < temp.length; k++) {
        if (recordSplit[1] === temp[k]) continue mid;
      }
      if (+recordSplit[0] === i) {
        temp.push(recordSplit[1]);
        if (temp.length > 5) temp.shift();
      }
    }
    result.push(temp);
  }
  return result.flat();
}

console.log(solution(1, ['1 ftacta', '1 sina', '1 hana', '1 robel', '1 abc', '1 sina', '1 lynn'])); // [ 'sina', 'hana', 'robel', 'abc', 'lynn' ]
console.log(solution(4, [
                          '1 a', '1 b', '1 abc', '3 b', '3 a', '1 abcd', '1 abc', '1 aaa',
                          '1 a', '1 z', '1 q', '3 k', '3 q', '3 z', '3 m', '3 b'
                        ])); // [ 'sina', 'hana', 'robel', 'abc', 'lynn' ]

// 50개 가량의 테스트 케이스는 모두 통과했지만 가독성 측면에서 너무 좋지 않은 코드같아 추후 업데이트 예정
