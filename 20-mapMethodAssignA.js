// Assignment A: map() method
// File→ 20-mapMethodAssigA.js

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

// ===== Step 1: Add 10 to each element and log new array result on console =====
const arrayAddTen = arrayNumbers.map((number) => number + 10);
console.log("Step 1: Array after adding 10 to each element:");
console.log(arrayAddTen);

// ===== Step 2: Cube each array element and log on console =====
const arrayCubed = arrayNumbers.map((number) => number ** 3);
console.log("Step 2: Array after cubing each element:");
console.log(arrayCubed);

// ===== Step 3: Add the index value to each corresponding array element and log new array result on console =====
const arrayWithIndex = arrayNumbers.map((number, index) => number + index);
console.log("Step 3: Array after adding index value to each element:");
console.log(arrayWithIndex);
