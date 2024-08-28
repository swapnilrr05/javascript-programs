const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

// Step 1: Reverse the array
const reversedArray = [...arrayRollNumbers].reverse();
console.log("1. Reversed Array: ", reversedArray);
console.log("------------------------------ 1 ------------------------------");

// Step 2: Use the sort() method as it is without any custom sorting logic
const sortedArrayDefault = [...arrayRollNumbers].sort();
console.log("2. Sorted Array using default sort(): ", sortedArrayDefault);
console.log("------------------------------ 2 ------------------------------");

// Step 3: Sort the array in ascending order using custom logic
const sortedArrayAscending = [...arrayRollNumbers].sort((a, b) => a - b);
console.log("3. Sorted Array in Ascending Order: ", sortedArrayAscending);
console.log("------------------------------ 3 ------------------------------");

// Step 4: Find the Greatest number from the array
const greatestNumber = Math.max(...arrayRollNumbers);
console.log("4. Greatest Number: ", greatestNumber);
console.log("------------------------------ 4 ------------------------------");

// Step 5: Find the smallest number from the array
const smallestNumber = Math.min(...arrayRollNumbers);
console.log("5. Smallest Number: ", smallestNumber);
console.log("------------------------------ 5 ------------------------------");

// Step 6: Remove duplicates from the array
const uniqueArray = [...new Set(arrayRollNumbers)];
console.log("6. Array without duplicates: ", uniqueArray);
console.log("------------------------------ 6 ------------------------------");
