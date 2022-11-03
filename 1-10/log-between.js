function logBetween1(min, max) {
if (max < min) return [];
let index = 0;
  let newArr = Array(max - min);
  for (let i = min; i <= max; i++) {
    newArr[index] = i;
    index++;
  }
  return newArr;
}

function logBetween2(min, max) {
  let newArr = []
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }
  return newArr;
}

// 0(n) space complexity, 0(n) time complexity
console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]
