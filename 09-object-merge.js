

const emp = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 56
}
emp.age = 80;
console.log(emp);

Object.freeze(emp);
emp.firstName= "Elon";
console.log(emp);

console.log(`--------------------------object cloning----------------`);
const student = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 56
}


const clonedStudent = Object.assign({}, student);
console.log(clonedStudent);

const clonedObj ={...student};
console.log(clonedObj);

console.log(`--------------------------object merge----------------`);
const std = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 56
}
const address = {
    city: "LA",
    pin: 411057
}

const mergedObjects = Object.assign({},std,address);
console.log(mergedObjects);

const mergedObj = {...std, ...address};
console.log(mergedObj);


