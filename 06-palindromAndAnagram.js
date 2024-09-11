console.log(`----------------------- Palindrome logic  -----------------------`);


function isPalindrome(str) {
    let lowerStr = str.toLowerCase();
    let reversedStr = lowerStr.split('').reverse().join('');
    return lowerStr === reversedStr;
}
  
console.log(`Is this String "madam" is Palindrome = ${isPalindrome("madam")}`);
console.log(`Is this String "dad" is Palindrome = ${isPalindrome("dad")}`);
console.log(`Is this String "hello" is Palindrome = ${isPalindrome("hello")}`);
  
console.log(` ----------------------- Anagram logic -----------------------`);
 
  
function areAnagrams(str1, str2) {
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    let sortedStr1 = lowerStr1.split('').sort().join('');
    let sortedStr2 = lowerStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
  
console.log(`Is this Strings "Silent" , "Listen" are Anagram = ${areAnagrams("Silent", "Listen")}`);
console.log(`Is this Strings "Hello" , "World" are Anagram = ${areAnagrams("Hello", "World")}`);
console.log(`Is this Strings "Such" , "much" are Anagram = ${areAnagrams("Such", "much")}`);
  