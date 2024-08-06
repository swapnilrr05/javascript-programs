console.log("-------------------------Step1---------------------");

function greaterNumber(n1,n2){
    var result = n1>=n2 ? n1 : n2;
    console.log(`Given numbers are ${n1}, ${n2} and greater number is: ${result}`);
    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("-------------------------Step2---------------------");

function isEvenOrOddNum(num) {
    return num % 2 === 0;
}

// Test cases
console.log(`The number is even =` ,isEvenOrOddNum(29)); 
console.log(`The number is even =`,isEvenOrOddNum(44)); 
console.log(`The number is even =`,isEvenOrOddNum(0));  
console.log(`The number is even =`,isEvenOrOddNum(101)); 


console.log("-------------------------Step3---------------------");

function wordLength(word) {
    if (word.length % 2 === 0) {
        return "EVEN";
    } else {
        return "ODD";
    }
}

// Test cases
console.log(`javaScript has length ` ,wordLength("JavaScript")); 
console.log(`developer has length` ,wordLength("developer"));  
console.log(`Google has length` ,wordLength("Google"));     


