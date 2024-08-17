console.log(`-------------------1. Count the Total Number of Vowels-----------------------------`);
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

let string = "I am very good IT Developer";
console.log("Total number of vowels:", countVowels(string));

console.log(`--------------------2. Sum of the Cube of Numbers from 1 to 5----------------------------`);
function sumOfCubes() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i * i * i;
    }
    return sum;
}

console.log("Sum of cubes from 1 to 5: ", sumOfCubes());





console.log(`---------------3. Function for Odd-Positioned Characters---------------------------`);

function oddPositionedChars(str, strName) {
    console.log(`Results for ${strName}:`);
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0 && str[i] !== " ") {
            console.log(`Character at odd position ${i + 1} = ${str[i]}`);
        }
    }
    console.log("----------"); // Separator between results
}

let string1 = "Hard work always pays back";
let string2 = "Soon I will be UI IT Champ";

oddPositionedChars(string1, "String 1");
oddPositionedChars(string2, "String 2");










