function solution(s) {
  let arr = s.split(' ').map(v => v.split(''));

  return arr
    .map(outerV =>
      outerV
        .map((innerV, innerIndex) => (innerIndex % 2 ? innerV.toLowerCase() : innerV.toUpperCase()))
        .join('')
    )
    .join(' ');
}

console.log(solution(' try    hello world    '));
console.log(solution('GO  to the movE'));
