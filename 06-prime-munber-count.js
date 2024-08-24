// Program to count prime numbers

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to count prime numbers in an array and print details
function countPrimes(array) {
    let primeCount = 0;
    console.log("Program to count prime numbers");
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            console.log(`${array[i]} is prime number`);
            primeCount++;
        }
    }
    console.log(`Total prime numbers from given array [${array}] are: ${primeCount}`);
}


// Array to check
const array = [3, 9, 7, 6, 19, 29, 53];
countPrimes(array);
console.log(`--------------------------------------------------`);
// Function to count spaces in a string
function spaceCount(str) {
    let spaceCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }
    return spaceCount;
}

// Example strings
const string1 = "Revision is the mother of success";
const string2 = "JavaScript is the language of internet world";

console.log(`Total number of white spaces from string "${string1}" are: ${spaceCount(string1)}`);
console.log(`Total number of white spaces from string "${string2}" are: ${spaceCount(string2)}`);

console.log(`--------------------------------------------------`);
// Program to find duplicate characters

// Function to find and print duplicate characters and their counts
function duplicateCharCount(str) {
    // Convert the string to lowercase to make the search case-insensitive
    str = str.toLowerCase();
    
    // Create an object to keep count of each character
    let charCount = {};

    // Count each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char !== ' ') {  // Ignoring spaces
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    // Prepare the result string for characters that have a count greater than 1
    let result = '';
    for (const char in charCount) {
        if (charCount[char] > 1) {
            result += `${char} - ${charCount[char]}, `;
        }
    }

    // Remove the trailing comma and space
    if (result.length > 0) {
        result = result.slice(0, -2);
    }

    console.log(result);
}

// Separator function to create a visual break in the output
function printSeparator() {
    console.log('------------------------------------------');
}

// Test the function with different strings
console.log(`Program to find duplicate characters`);

console.log(`\nString: "Banana"`);
duplicateCharCount("Banana"); // Expected output: a - 3, n - 2
printSeparator();

console.log(`\nString: "Apple"`);
duplicateCharCount("Apple"); // Expected output: p - 2
printSeparator();

console.log(`\nString: "Software Developer"`);
duplicateCharCount("Software Developer"); // Expected output: o - 2, r - 2, e - 4
printSeparator();

