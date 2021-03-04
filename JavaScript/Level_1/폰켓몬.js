// first
const solution = nums => {
  const typesLength = nums.filter((num, index) => nums.indexOf(num) === index).length;
  return (typesLength > nums.length / 2) ? nums.length / 2 : typesLength;
};

// Set활용
const solution2 = nums => {
  const typesLength = new Set(nums).size;
  return (typesLength > nums.length / 2) ? nums.length / 2 : typesLength;
};

// 그냥 한줄로 써보고 싶었음
const solution3 = nums => (new Set(nums).size > nums.length / 2 ? nums.length / 2 : new Set(nums).size);

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution2([3, 3, 3, 2, 2, 4])); // 3
console.log(solution3([3, 3, 3, 2, 2, 2])); // 2
