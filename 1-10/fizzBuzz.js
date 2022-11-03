function fizzBuzz1(max) {
let newArr = [];
  for (let i = 1; i < max; i++) {
    if (!(i % 3) ^ !(i % 5)) {
      newArr.push(i);
    }
  }
  return newArr;
}

function fizzBuzz2(max) {
    let newArr = [];
      for (let i = 1; i < max; i++) {
        if (((i % 3) && !(i % 5)) || (!(i % 3) && (i % 5)) ) {
          newArr.push(i);
        }
      }
      return newArr;
    }

// time: 0(n), space: 0(n)
console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]
