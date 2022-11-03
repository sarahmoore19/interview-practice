function inPlaceEvenOddSort(arr) {

// first part important algorithm to practice, efficient method of moving a type of ele to the end while maintaining order of other ele's

    let firstOdd = undefined;
    for (let i = 0; i < arr.length; i++) {
      if (firstOdd === undefined && (arr[i] % 2)) {
        firstOdd = i;
      }
      if (firstOdd !== undefined && !(arr[i] % 2)) {
        [arr[firstOdd], arr[i]] = [arr[i], arr[firstOdd]]
        //increment to the next odd number so they can be switched from behind until no more Odds
        firstOdd++;
      }
    }

    let evenCount = 0;
    while (!(arr[evenCount] % 2)) evenCount++;

    let count = 1;
    while (count > 0) {
      count = 0;
      for (let i = 0; i < evenCount - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          count++;
        }
      }
    }
    count = 1
    while (count > 0) {
      count = 0;
      for (let i = evenCount; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        count++;
        }
      }
    }
    return arr;
  }

  let arr = [1, 5, 8, 2, 4, 3, 6, 8, 90];
  console.log(moveZeroes(arr))
