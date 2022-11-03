let moveZeroes = (arr) => {
  let currFirstZero;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] && currFirstZero === undefined) {
      currFirstZero = i;
    }
    if (arr[i] && currFirstZero !== undefined) {
      [arr[currFirstZero], arr[i]] = [arr[i], arr[currFirstZero]];
      currFirstZero++;
    }
  }
  return arr;
}




// time complexity of this is 0(n);
// space complexity is constant
let arr = [0, 4, 1, 0, 4, 5, 8, 0, 32, 0, 8, 0]
console.log(moveZeroes(arr));
