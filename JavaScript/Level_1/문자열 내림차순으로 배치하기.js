const solution = s => s.split('').sort((a, b) => (b > a ? 1 : -1)).join('');

console.log(solution('Zbcdefg')); // gfedcbZ
