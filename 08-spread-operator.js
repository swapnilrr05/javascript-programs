

let array = [10, 20, 30, 20, 80];
console.log(array);
const result= array.join(",");
console.log(result);
console.log(typeof result);


console.log(`------------- Concat array--------------`);
let arrayOne = [10,20,30];
let arrayTwo = [10,20,30];
const arrayConcat= arrayOne.concat(arrayTwo);
console.log(arrayConcat);


console.log(`------------- creating an array from existing array -------------`);
let arrayThree = [10, 20, 30, 20, 80];
let arrayFour = [];
for (const element of arrayThree) {
    arrayFour.push(element);

    
}
console.log(arrayThree);
console.log(arrayFour);

console.log(`------------- spread operator -------------`);
let arrayFive = [10, 20, 30, 20, 80];
console.log(arrayFive);
console.log(...arrayFive);
let arraySix= [...arrayFive];
console.log(arraySix);

console.log(`---------------spread array concat-----------` );
let arraySeven= [10,20,30];
let arrayEight= [100,200,300];
let arrayNine= [...arraySeven,...arrayEight];
console.log(arrayNine);

console.log(`-------------- Remove duplicate elements-----------------`);
let array1 = [10,20,30,20,80,30,10];
let arrayNew= [...new Set(array1)];
console.log(arrayNew);
















