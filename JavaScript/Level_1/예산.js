function solution(d, budget) {
  const copyD = [...d];
  let result = 0;

  for (let i = 0; i < d.length; i++) {
    const minD = Math.min(...copyD);

    if (minD <= budget) {
      const minDIndex = copyD.indexOf(minD);
      copyD.splice(minDIndex, 1);
      budget -= minD;

      result += 1;
    } else {
      break;
    }
  }

  return result;
}
