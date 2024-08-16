
const fruits = [`Banana`,`Orange`,`Mango`,`Water Melon`];
console.log(fruits);


console.log(`---------------task 1-First and Last elements-----------`);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

console.log(`--------------task 2--unshift----------`);
fruits.unshift(`Papaya`);
console.log(fruits);

console.log(`--------------task 3--splice-----------`);
console.log(fruits);
fruitsSplice=fruits.splice(3,1);
console.log(fruitsSplice);
console.log(fruits);

console.log(`--------------task 4--push-----------`);
fruits.push(`Pineapple`)
console.log(fruits);

console.log(`--------------task 5--splice+insert-----------`);
console.log(fruits);
fruitsSplice=fruits.splice(3,0,`Dragon Fruit`);
console.log(fruitsSplice);
console.log(fruits);

console.log(`--------------task 6--splice+replace-----------`);
console.log(fruits);
fruitsSplice=fruits.splice(2,1,`Kiwi`);
console.log(fruitsSplice);
console.log(fruits);

console.log(`--------------task 7--slice 1 to 4-----------`);
fruitsSlice=fruits.slice(1,5);
console.log(fruitsSlice);

console.log(`--------------task 8--select last 3 elements-----------`);
console.log(fruits.slice(fruits.length-3));










 