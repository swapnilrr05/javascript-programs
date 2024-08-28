// Employee class definition
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

// Creating Employee objects
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

// Add all Employee objects to arrayEmployees
const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_vinay,
  emp_mahi,
];

// Step 1: Find all employees working in 'TCS' and log only employee names and company names
console.log("---------- Step 1: Employees Working in TCS ----------");
arrayEmployees.forEach((emp) => {
  if (emp.emp_company === "TCS") {
    console.log(`Employee Name: ${emp.emp_name}, Company: ${emp.emp_company}`);
  }
});

console.log("------------------------------------------------------");

// Step 2: Find 'Finance' department employees and log only department and employee name
console.log("---------- Step 2: Employees in Finance Department ----------");
arrayEmployees.forEach((emp) => {
  if (emp.emp_dept === "Finance") {
    console.log(`Department: ${emp.emp_dept}, Employee Name: ${emp.emp_name}`);
  }
});

console.log("------------------------------------------------------");

// Step 3: Find employees whose name starts with 'R' and log complete employee details
console.log(
  "---------- Step 3: Employees Whose Name Starts with 'R' ----------"
);
arrayEmployees.forEach((emp) => {
  if (emp.emp_name.startsWith("R")) {
    console.log(emp);
  }
});

console.log("------------------------------------------------------");

// Step 4: Find employees with salary greater than 75000 and log emp name, company, and salary
console.log(
  "---------- Step 4: Employees with Salary Greater than 75000 ----------"
);
arrayEmployees.forEach((emp) => {
  if (emp.emp_salary > 75000) {
    console.log(
      `Name: ${emp.emp_name}, Company: ${emp.emp_company}, Salary: ${emp.emp_salary}`
    );
  }
});

console.log("------------------------------------------------------");

// Step 5: Find employees with salary >= 50000 and from 'IT' department, log complete emp details
console.log(
  "---------- Step 5: IT Department Employees with Salary >= 50000 ----------"
);
arrayEmployees.forEach((emp) => {
  if (emp.emp_salary >= 50000 && emp.emp_dept === "IT") {
    console.log(emp);
  }
});

console.log("------------------------------------------------------");

// Step 6: Find all employees from company 'Infy' and log complete employee details
console.log("---------- Step 6: Employees from Company 'Infy' ----------");
arrayEmployees.forEach((emp) => {
  if (emp.emp_company === "Infy") {
    console.log(emp);
  }
});

console.log("------------------------------------------------------");
