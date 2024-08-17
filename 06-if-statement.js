
console.log(`Before if block`);
var age = 19;
if (age>=18 ) {
    console.log(`inside if block`);
    console.log(`you are eligible for vote, ${age}`);
    
    
    
}
console.log(`after if block`);

var votingChecker = function (age, person){
    if (age>=18) {
        console.log(`hey ${person} your age is ${age} and you are eligible for vote `);
        
    } else {
        console.log(`Unfortunately, ${person} your age is ${age} and you are not eligible for vote `);

    }
}
votingChecker(21,`Jay`)
votingChecker(17,`Om`)
