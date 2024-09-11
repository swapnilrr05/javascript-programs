
const jsonString = `
{
    "id": 11,
    "fullName": "Elon Musk",
    "isMarried": true,
    "city": null
}`

const employee = JSON.parse(jsonString);
console.log(employee);

console.log(`------------object to json------------`);
const address= {
    flatNumber: "82",
    society: "Horizon",
    street:"wakad",
    state: "MH"
        
}
const addressJson = JSON.stringify(address);
console.log(typeof addressJson);

console.log(addressJson);
