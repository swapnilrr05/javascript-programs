
console.log(`-----------Step 1: Create an Object with the Name professor---------`);
let professor = {
    name: "Dr. John Doe",
    age: 45,
    department: "Computer Science",
    yearsOfService: 20,
    isTenured: true,
    certificates: ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],
    degrees: {
        engineering: "CSC",
        PHD: "Adv Computing",
        masters: "AI and Robotics",
        bachelors: "Information Technology"
    }
    
}
console.log(`-----------Step 2: Add a New Property totalExperience---------`);
professor.totalExperience = "14 years";
console.log(professor);

console.log(`-----------Step 3: Modify an Existing Property---------`);
professor.department = "Software Engineering";
console.log(professor);

console.log(`-----------Step 4: Add a New Certificate---------`);
professor.certificates.splice(1, 0, "Oracle Certified");
console.log(professor.certificates[professor.certificates.length - 1]);

console.log(`-----------Step 5: Traverse the certificates Array Using a for Loop---------`);
for (let i = 0; i < professor.certificates.length; i++) {
    console.log(professor.certificates[i]);
}


console.log(`----------Step 6: Log the Complete Object Using a for...in Loop----------`);
for (let key in professor) {
    console.log(`${key}: ${professor[key]}`);
}




