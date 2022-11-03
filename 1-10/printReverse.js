function printReverse1(min, max) {
  if (min > max) return [];
  let newArr = Array(max - min - 2);
  let i = (max - min) - 2;
  for (let j = min + 1; j < max; j++) {
    newArr[i] = j;
    i--;
  }
  return newArr;
}

function printReverse2(min, max) {
    if (min > max) return [];
    let newArr = Array(max - min - 2);
    let i = 0;
    for (let j = max - 1; j > min; j--) {
      newArr[i] = j;
      i++;
    }
    return newArr;
}

function printReverse3(min, max) {
    let newArr = [];
    for (let j = max - 1; j > min; j--) {
      newArr.push(j)
    }
    return newArr;
}

// time: 0(n), space: 0(n)

console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
console.log(printReverse(90, 94)) // => [93, 92, 91]
