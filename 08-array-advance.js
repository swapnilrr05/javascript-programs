

let array = [10,20,30,20,80]
console.log(array);
console.log(`Inserting element at the end of the array`);
array.push(40);
console.log(array);
console.log(`Inserting element at the before the array`);
array.unshift(90);
console.log(array);
console.log(`deleting element at end in the array`);
array.pop();
console.log(array);
console.log(`deleting element at start in the array`);
array.shift();
console.log(array);
console.log(`deleting selected element in the array`);
arraySlice=array.slice(1);
console.log(arraySlice);
console.log(`---------------------splice-------------------`);
arraySplice = array.splice(3);
console.log(arraySplice);




