console.log("============ 1Function with no arguments and no return value =============================");

function show (){
    console.log("Inside show function");
}
show ();    

console.log("============2 Function with arguments and no return value =============================");

function multiply(n1,n2){
    console.log("given number:", n1,n2);
    var result= n1*n2
    console.log("Multiplication is:", result);


}
multiply (8,9);
multiply (878,833);
multiply (87);


console.log("============3 Function with no arguments and return value =============================");
function demo(){
    console.log("inside demo function...");
    return "GOod Morning";
}
var result = demo ();
console.log(result);