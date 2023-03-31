/*
CHALLENGE

In this challenge, we will be building a function that determines the last index of an item in an array.
*/

const lastIndexOf = function (arr, num) {
  let lastIndex = -1
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      lastIndex = i;
    }
  }
  return lastIndex;
}


console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);