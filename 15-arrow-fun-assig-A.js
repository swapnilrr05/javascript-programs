// Step 1: Arrow Function with No Arguments and No Return Value
const greet = () => {
  console.log("Good Morning, Today is Monday");
};

// Separator for Step 1
console.log("---------- Step 1 Completed: Greet Function ----------");

// Invoke the greet function
greet();

console.log("------------------------------------------------------");

// Step 2: Arrow Function with 3 Arguments and No Return Value (Perform Multiplication)
const multiply = (a, b, c = 1) => {
  console.log(`Multiplication of ${a}, ${b}, and ${c} is: ${a * b * c}`);
};

// Separator for Step 2
console.log("---------- Step 2a: Multiplication Function ----------");

// Invoke the multiply function with values 5, 5, 2
multiply(5, 5, 2);

// Separator for Step 2b
console.log(
  "---------- Step 2b: Multiplication with Default Argument ----------"
);

// Invoke the multiply function with values 10, 4 and default 3rd argument as 1
multiply(10, 4);

console.log("------------------------------------------------------");

// Step 3: Arrow Function with 5 Arguments and Return Value (Perform Addition)
const add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

// Separator for Step 3a
console.log("---------- Step 3a: Addition Function ----------");

// Invoke the add function with values 100, 100, 200, 349, 756
const sum1 = add(100, 100, 200, 349, 756);
console.log(`Addition of 100, 100, 200, 349, and 756 is: ${sum1}`);

// Separator for Step 3b
console.log(
  "---------- Step 3b: Addition Function with String Concatenation ----------"
);

// Arrow function for concatenating strings
const concatStrings = (a, b, c, d, e) => {
  return a + " " + b + " " + c + " " + d + " " + e;
};

// Invoke the concatStrings function with string values
const result = concatStrings("I am", "learning", "ES6", "features", "in depth");
console.log(`Concatenation result is: ${result}`);

console.log("------------------------------------------------------");
