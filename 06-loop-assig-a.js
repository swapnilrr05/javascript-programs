var sentence = `I am very good IT Developer`;
var vowels = `aeiou`;
var vowelCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    sentence.charAt(index);
    char = char.toLowerCase();
    if (vowels.includes(char)) {
        vowelCount++
        
    }  
    
} 
console.log(`vowels count is : ${vowelCount}`);


