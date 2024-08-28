// Assignment A: Using forEach() with arrow function and callback

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

// Step 1: Log the array element with its index using forEach() with an arrow function
console.log("===== Step 1: Log each element with its index =====");
arrayNumbers.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});

// Step 2: Find the positive numbers and log them on console
console.log("===== Step 2: Log positive numbers =====");
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});

// Step 3: Find the negative numbers, add them into a new array, and log the new array on the console
console.log("===== Step 3: Log negative numbers =====");
const negativeNumbers = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});
console.log("Negative numbers:", negativeNumbers);

// Step 4: Find the even numbers and log them on console using forEach() with arrow function
console.log("===== Step 4: Log even numbers =====");
arrayNumbers.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

// Step 5: Find the sum of all elements from arrayNumbers and log the sum value on console
console.log("===== Step 5: Sum of all elements =====");
let sum = 0;
arrayNumbers.forEach((element) => {
  sum += element;
});
console.log("Sum of all elements:", sum);

// Step 6: Log the only even-indexed array values on console. forEach() with arrow function preferred
console.log("===== Step 6: Log even-indexed elements =====");
arrayNumbers.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log(`Element at even index ${index} is ${element}`);
  }
});
