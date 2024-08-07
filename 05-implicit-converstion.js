let result;


function num(n1,n2){

    var result= n1 + n2
    console.log(result);
    console.log(`the type of "${n1}" is  ${typeof n1}`);
    console.log(`the type of ${n2} is  ${typeof n2}`);
    
    
    
    

}
console.log("------------output 1 ----------------------");

num("3",2)
console.log(`So in output operand string and number (got converted to string) got concatenated`);

console.log("------------output 2 ----------------------");
num("3",true)
console.log(`So in output operand string and boolean (got converted to string) got concatenated`);

console.log("------------output 3 ----------------------");
num("3",undefined)
console.log(`So in output operand string and undefined (got converted to string) got concatenated`);

console.log("------------output 4 ----------------------");
num("3",null)
console.log(`So in output operand string and null (got converted to string) got concatenated`);