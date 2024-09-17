
let student = {
    name: "Swapnil Ranshinge",
    class: "XII",
    rollNo: 9,
}
let properties = Object.keys(student);
console.log(properties);
console.log(`--------------------------------------------------------------------`);

//--------------------------------------------------------------------

let student1 = {
    name: "Swapnil Ranshinge",
    class: "XII",
    rollNo: 9,
}
console.log(`Before deleting rollNo:`);
console.log(student1);
delete student1.rollNo;
console.log(student1);
console.log(`--------------------------------------------------------------------`);

let car = {
    make: "Rolls Royce",
    model: "Phantom",
    year:  2021,
    color: "Blue"
};
function getObjectLength(obj){
    return Object.keys(obj).length;
}
console.log("Length of the car object:" + getObjectLength(car));
console.log(`--------------------------------------------------------------------`);

let person = {
    name: "John Cena",
    age: 48,
    profession: "Wrestler"

}
let propertyName= "age";
console.log(person[propertyName]);
console.log(`--------------------------------------------------------------------`);

let employees = [
    {
        id: 1,
        name: "John Cena",
        position: "Wrestler",
        salary: 50000,
    },
];
function updateEmployeeSalary(id, newSalary){
    for (var i = 0; i< employees.length; i++) {
        if (employees[i].id === id){
            employees[i].salary = newSalary;
            return;
        }
    }
}
console.table(employees);s
updateEmployeeSalary (1, 60000);
console.table(employees);
