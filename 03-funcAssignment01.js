console.log("================1==============");
function greet() {
    console.log("Hello, welcome!");
}

function farewell() {
    console.log("Goodbye, see you next time!s");
}

// Calling the functions
greet();
farewell();

console.log("=================2================");

function personalDetails(firstName, lastName, collegeName) {
    console.log("My First Name:", firstName);
    console.log("My Last Name:", lastName);
    console.log("My College Name:", collegeName);
}

// Calling the function
personalDetails("Swapnil", "Ranshinge", "ADCET");

console.log("=================3================");
function addThreeValues(a, b, c) {
    console.log("Addition is",a + b + c);
}

// Calling the function with numeric values
addThreeValues(10.23, 600, 40); // Output: 650.23

// Calling the function with string values
addThreeValues("Hello", "Good", " Morning"); // Output: HelloGood Morning



