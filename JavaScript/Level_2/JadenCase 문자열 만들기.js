function solution(s) {
  const jadenArr = s.split(' ');

  return jadenArr
    .map(jadenStr => {
      if (jadenStr === '') return '';

      const firstWord = jadenStr[0].toUpperCase();
      const lowerJadenStr = jadenStr.toLowerCase();

      return `${firstWord}${lowerJadenStr.slice(1)}`;
    })
    .join(' ');
}
