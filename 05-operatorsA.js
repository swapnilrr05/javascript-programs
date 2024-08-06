console.log("====================Step1=========================");


function squareOfWordLength(sentence){
    console.log(`Given sentense is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;

}
var result = squareOfWordLength("JavaScript");
console.log(`Square of word length is: ${result}`);



var result = squareOfWordLength("Google Chrome");
console.log(`Square of word length is: ${result}`);



var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of word length is: ${result}`);

console.log("====================Step2=========================");

function processString() {
    var str = "I am Angular Developer";
    console.log(`The length of sentence "${str}" is = S${str.length}`);
    
    
    // Step 1: Find the length of the string
    var strLength = str.length;
    
    // Step 2: Count the number of words in the string
    var wordsArray = str.split(' ');
    var numberOfWords = wordsArray.length;
    
    // Step 3.1: Divide the string length by the number of words
    var result1 = strLength / numberOfWords;
    console.log("The result after the divisions is:", result1);
    
    // Step 3.2: Multiply the string length by the number of words
    var result2 = strLength * numberOfWords;
    console.log("The result after the multiplication is:", result2);
}

// Call the function to see the results
processString();


