
const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(array);



console.log(`--------1. Find the total elements available or length and log on console------`);
console.log(array.length);



console.log(`--------2. Log the first element and last element in arrayNumbers and log on console------`);
console.log(array[0]);
console.log(array[array.length-1]);



console.log(`--------3. Log the third last element using length property and log on console------`);
console.log(array[array.length-3]);


console.log(`--------4. Find all even numbers using for...of loop and log on console------`);
let evenNumbers = [];
for (const num of array) {
    if (num%2==0) {
        evenNumbers.push(num)
        
    }
}
console.log(evenNumbers);


console.log(`------------------5. Find all odd numbers using for...of loop and log on console`);
let oddNumbers = [];
for (const num of array) {
  if (num % 2 !== 0) {
    oddNumbers.push(num);
  }
}
console.log(oddNumbers);



console.log(`-------------6. Find all the even-positioned elements from arrayNumbers, sum it and log on console`); 
let evenPositionSum = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) { 
    evenPositionSum += array[i];
  }
}
console.log("Sum of even-positioned elements:", evenPositionSum);



console.log(`-------------7. Find all the odd-positioned elements from arrayNumbers, sum it and log on console`);
let oddPositionSum = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 !== 0) { 
    oddPositionSum += array[i];
  }
}
console.log("Sum of odd-positioned elements:", oddPositionSum);



console.log(`-------------8. Find the sum of all elements from arrayNumbers, log on console`);
let totalSum = 0;
for (const num of array) {
  totalSum += num;
}
console.log("Sum of all elements:", totalSum);



console.log(`---------------------9. Find the numbers which are multiple of 5`);
let multiplesOfFive = [];
for (const num of array) {
  if (num % 5 === 0) {
    multiplesOfFive.push(num);
  }
}
console.log(multiplesOfFive);



console.log(`----------------10. Is number 115 available in arrayNumbers?`);
const is115Available = array.includes(115);
console.log("Is 115 available in array?:", is115Available);



console.log(`---------------11. Is number 23 available in arrayNumbers?`); 
const is23Available = array.includes(23);
console.log("Is 23 available in array?:", is23Available);



console.log(`---------------12. Insert numbers → 55, 66 at index 3 and log array on console`);
array.splice(3, 0, 55, 66);
console.log("After inserting 55, 66 at index 3:", array);



console.log(`------------------ 13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
array.splice(4, 3);
console.log("After deleting 3 elements from index 4:", array);






