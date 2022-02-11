// Create a JavaScript function that when you inputs a number the
// function you have created checks whether the number belongs to the
// Fibonacci sequence or not.

// The Fibonacci sequence is a series of numbers where a number
//is the addition of the last two numbers, starting with 0, and 1.

const isFibonacci = (num, count = 1, last = 0) => {
  if (num == 0 || num == 1) {
    //0 and 1 are the first two numbers in the Fibonacci sequence
    return true;
  } else if (count < num) {
    return isFibonacci(num, count + last, count);
  } else if (count === num) {
    return true;
  } else {
    return false;
  }
};

//sample inputs

console.log(isFibonacci(0)); // true
console.log(isFibonacci(1)); // true
console.log(isFibonacci(2)); // true
console.log(isFibonacci(3)); // true
console.log(isFibonacci(4)); // false

//NOTE: This function assumes all inputs are positive integers.
