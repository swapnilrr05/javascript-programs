

let person = {
    firstName: "Jenny",
    lastName:"Gates",
    age: 24,
    isMarried: true,
    skills: ["HTML","CSS","JS"],
    marks:{
        maths: 80,
        physics: 90,
        english: 56,
        chemistry: 78
    }
}
console.log(person);
const firstName= person.firstName;
console.log(firstName);
console.log(`First Name: ${firstName}`);

console.log(`Age is: ${person.age}`);

console.log(`----------------------------`);

const personSkills = person.skills;
console.log(`personSkills`);
for (const element of personSkills) {
    console.log(element);
    
}
console.log(`----------------------------`);
console.log(`English marks: ${person.marks.english}`);

console.log(`-------------age update---------------`);
person.age = 55;
console.log(`updated age: ${person.age}`);
console.log(person);

console.log(`-------------add new property---------------`);
person.country = "India";

console.log(`-------------traversing---------------`);
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`${key},${element}`);
        
        
    }
}


console.log(`----------------------------`);
let employee= {
    fullName: "Elon Musk",
    age : 55,
    city :"LA",
    country : "USA",
    details:function(){
        console.log(`Full Name: ${this.fullName}, City: ${this.city}, Country: ${this.country}`);
        
    }
}
employee.details();



