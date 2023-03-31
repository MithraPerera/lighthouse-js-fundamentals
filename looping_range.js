/*
CHALLENGE

Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of every even number from 0 to 100. In this challenge, we will build a function that creates an array like this for a given start, end, and step parameter.
*/

function range(start, end, step) {
  let num = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return num;
  }
  for (let i = start; i <= end; i += step) {
    num.push(i);
  }
  return num;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));