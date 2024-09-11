// 1. Step: Get the last character of the strings
function getLastCharacter(str) {
    return str.charAt(str.length - 1);
}

const str1 = "Hey, my friend, Programming Language";
const str2 = "I am learning logical programs";
const str3 = "Angular";

console.log('1. The last character of the string "' + str1 + '" is: ' + getLastCharacter(str1));
console.log('1. The last character of the string "' + str2 + '" is: ' + getLastCharacter(str2));
console.log('1. The last character of the string "' + str3 + '" is: ' + getLastCharacter(str3));

// ----------------------

// 2. Step: Get the first character of the strings
function getFirstCharacter(str) {
    return str.charAt(0);
}

const str4 = "React";
const str5 = "Elon Musk";
const str6 = "Apple founder is Stew Job";

console.log('2. The first character of the string "' + str4 + '" is: ' + getFirstCharacter(str4));
console.log('2. The first character of the string "' + str5 + '" is: ' + getFirstCharacter(str5));
console.log('2. The first character of the string "' + str6 + '" is: ' + getFirstCharacter(str6));

// ----------------------

// 3. Step: Check if the strings contain "UI"
function containsUI(str) {
    return str.includes('UI');
}

const str7 = "React - UI Developer";
const str8 = "UI Developer";
const str9 = "Front end and backend technologies";

console.log('3. Does the string "' + str7 + '" contain "UI"? ' + containsUI(str7));
console.log('3. Does the string "' + str8 + '" contain "UI"? ' + containsUI(str8));
console.log('3. Does the string "' + str9 + '" contain "UI"? ' + containsUI(str9));

// ----------------------

// 4. Step: Split strings into an array of substrings
function splitString(str, delimiter) {
    return str.split(delimiter);
}

const str10 = "apple, orange, banana";
const str11 = "Stew, Bill, Jenny, Elon";

const result1 = splitString(str10, ',');
console.log('4. The array of substrings from "' + str10 + '" is:', result1);

const result2 = splitString(str11, ',');
console.log('4. The array of substrings from "' + str11 + '" is:', result2);

// ----------------------

// 5. Step: Reverse the string using predefined methods
function reverseStringPredefined(str) {
    return str.split('').reverse().join('');
}

const str12 = "Software";
const str13 = "UI Developer";

console.log('5. Reversed string of "' + str12 + '" is: ' + reverseStringPredefined(str12));
console.log('5. Reversed string of "' + str13 + '" is: ' + reverseStringPredefined(str13));

// ----------------------

// 6. Step: Reverse the string without using predefined methods
function reverseStringManual(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const str14 = "Web Developer";
const str15 = "Billion Dollar";
const str16 = "Java";

console.log('6. Reversed string of "' + str14 + '" without predefined methods is: ' + reverseStringManual(str14));
console.log('6. Reversed string of "' + str15 + '" without predefined methods is: ' + reverseStringManual(str15));
console.log('6. Reversed string of "' + str16 + '" without predefined methods is: ' + reverseStringManual(str16));
