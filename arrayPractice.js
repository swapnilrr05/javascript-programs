// Step 1: Print the number of an element present in array
console.log(
  "----- Step 1: Print the number of an element present in array -----"
);
let arr1 = [1, 2, 3, 4, 5, 2, 3];
let element = 2;
let count = arr1.filter((x) => x === element).length;
console.log(`Number ${element} is present ${count} times.`);
console.log("--------------------------------------------------------------");

// Step 2: Print the sum of all items in array
console.log("----- Step 2: Print the sum of all items in array -----");
let arr2 = [1, 2, 3, 4, 5];
let sum = arr2.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all elements:", sum);
console.log("--------------------------------------------------------------");

// Step 3: Right rotate elements of an array
console.log("----- Step 3: Right rotate elements of an array -----");
let arr3 = [1, 2, 3, 4, 5];
let rotations = 1;
for (let i = 0; i < rotations; i++) {
  arr3.unshift(arr3.pop());
}
console.log("Array after right rotation:", arr3);
console.log("--------------------------------------------------------------");

// Step 4: Sort the elements of an array in ascending order
console.log(
  "----- Step 4: Sort the elements of an array in ascending order -----"
);
let arr4 = [5, 1, 3, 2, 4];
arr4.sort((a, b) => a - b);
console.log("Array in ascending order:", arr4);
console.log("--------------------------------------------------------------");

// Step 5: Sort the elements of an array in descending order
console.log(
  "----- Step 5: Sort the elements of an array in descending order -----"
);
let arr5 = [5, 1, 3, 2, 4];
arr5.sort((a, b) => b - a);
console.log("Array in descending order:", arr5);
console.log("--------------------------------------------------------------");

// Step 6: Find the 3rd largest number in array
console.log("----- Step 6: Find the 3rd largest number in array -----");
let arr6 = [10, 20, 4, 45, 99];
arr6.sort((a, b) => b - a);
console.log("3rd largest number is:", arr6[2]);
console.log("--------------------------------------------------------------");

// Step 7: Find the 2nd largest number in array
console.log("----- Step 7: Find the 2nd largest number in array -----");
let arr7 = [10, 20, 4, 45, 99];
arr7.sort((a, b) => b - a);
console.log("2nd largest number is:", arr7[1]);
console.log("--------------------------------------------------------------");

// Step 8: Find the largest number in array
console.log("----- Step 8: Find the largest number in array -----");
let arr8 = [10, 20, 4, 45, 99];
let maxNumber = Math.max(...arr8);
console.log("Largest number is:", maxNumber);
console.log("--------------------------------------------------------------");

// Step 9: Find the 2nd smallest number in array
console.log("----- Step 9: Find the 2nd smallest number in array -----");
let arr9 = [10, 20, 4, 45, 99];
arr9.sort((a, b) => a - b);
console.log("2nd smallest number is:", arr9[1]);
console.log("--------------------------------------------------------------");

// Step 10: Find the smallest number in array
console.log("----- Step 10: Find the smallest number in array -----");
let arr10 = [10, 20, 4, 45, 99];
let minNumber = Math.min(...arr10);
console.log("Smallest number is:", minNumber);
console.log("--------------------------------------------------------------");

// Step 11: Remove duplicates elements in array
console.log("----- Step 11: Remove duplicates elements in array -----");
let arr11 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr11)];
console.log("Array without duplicates:", uniqueArr);
console.log("--------------------------------------------------------------");

// Step 12: Print odd and even numbers in array
console.log("----- Step 12: Print odd and even numbers in array -----");
let arr12 = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr12.filter((num) => num % 2 === 0);
let oddNumbers = arr12.filter((num) => num % 2 !== 0);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
console.log("--------------------------------------------------------------");

// Step 13: Copy all elements from one array to another array
console.log(
  "----- Step 13: Copy all elements from one array to another array -----"
);
let arr13 = [1, 2, 3, 4, 5];
let copyArr = [...arr13];
console.log("Copied array:", copyArr);
console.log("--------------------------------------------------------------");

// Step 14: Find frequency of each element in array
console.log("----- Step 14: Find frequency of each element in array -----");
let arr14 = [1, 2, 2, 3, 4, 4, 5];
let frequency = {};
arr14.forEach((item) => (frequency[item] = (frequency[item] || 0) + 1));
console.log("Frequency of each element:", frequency);
console.log("--------------------------------------------------------------");

// Step 15: Left rotate elements in array
console.log("----- Step 15: Left rotate elements in array -----");
let arr15 = [1, 2, 3, 4, 5];
let leftRotations = 1;
for (let i = 0; i < leftRotations; i++) {
  arr15.push(arr15.shift());
}
console.log("Array after left rotation:", arr15);
console.log("--------------------------------------------------------------");

// Step 16: Print duplicate elements of an array
console.log("----- Step 16: Print duplicate elements of an array -----");
let arr16 = [1, 2, 2, 3, 4, 4, 5];
let duplicates = arr16.filter((item, index) => arr16.indexOf(item) !== index);
console.log("Duplicate elements:", [...new Set(duplicates)]);
console.log("--------------------------------------------------------------");

// Step 17: Print elements of an array
console.log("----- Step 17: Print elements of an array -----");
let arr17 = [1, 2, 3, 4, 5];
arr17.forEach((element) => console.log(element));
console.log("--------------------------------------------------------------");

// Step 18: Print elements of an array in reverse order
console.log("----- Step 18: Print elements of an array in reverse order -----");
let arr18 = [1, 2, 3, 4, 5];
console.log("Array in reverse order:", arr18.reverse());
console.log("--------------------------------------------------------------");

// Step 19: Print elements of an array in even positions
console.log(
  "----- Step 19: Print elements of an array in even positions -----"
);
let arr19 = [1, 2, 3, 4, 5, 6];
arr19.forEach((element, index) => {
  if ((index + 1) % 2 === 0) {
    console.log(`Element at even position ${index + 1} is: ${element}`);
  }
});
console.log("--------------------------------------------------------------");

// Step 20: Print elements of an array in odd positions
console.log("----- Step 20: Print elements of an array in odd positions -----");
let arr20 = [1, 2, 3, 4, 5, 6];
arr20.forEach((element, index) => {
  if ((index + 1) % 2 !== 0) {
    console.log(`Element at odd position ${index + 1} is: ${element}`);
  }
});
console.log("--------------------------------------------------------------");
