// 첫번째 풀이 통과, 완전 탐색이라 효율성 테스트는 안하지만 반복문이 너무 많은듯함
// 최악의 경우 34.63ms
function solution(sizes) {
  sizes.forEach(size => size.sort((a, b) => b - a));

  const widths = sizes.map(([width]) => width);
  const heights = sizes.map(([, height]) => height);

  const maxWidth = Math.max(...widths);
  const maxHeight = Math.max(...heights);

  return maxWidth * maxHeight;
}

// 두번째 풀이 최악의 경우 4.57ms
function solution2(sizes) {
  const [maxWidth, maxHeight] = sizes.reduce(
    ([width, height], size) => {
      const biggerWidth = Math.max(width, ...size);
      const biggerHeight = Math.max(height, Math.min(...size));

      return [biggerWidth, biggerHeight];
    },
    [0, 0]
  );

  return maxWidth * maxHeight;
}
