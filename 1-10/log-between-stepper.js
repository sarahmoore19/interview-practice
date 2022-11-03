logBetweenStepper1 = (min, max, step) => {
  if (max < min) return [];
  let newArr = Array(Math.ceil((max - min) / step));
  let i = 0;
  for (let j = min; j <= max; j+= step) {
    newArr[i] = j;
    i++;
  }
  return newArr;
}

logBetweenStepper2 = (min, max, step) => {
    let newArr = []
    for (let j = min; j <= max; j+= step) {
      newArr.push(j);
    }
    return newArr;
  }


// 0(n) space complexity, 0(n) time complexity
console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]
