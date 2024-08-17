
let array = [10,20,30,20,80]
console.log(array);
console.log(array[2]);
console.log(`----------------------------------`);
array [3]= 100;
console.log(array);
console.log(`----------------------------------`);

let arrayList = ["Ram", "Sham","Nam","Jay","Om"]
console.log(arrayList);
console.log(arrayList[2]);

console.log(`-------------traversing an array------------------`);
for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);
    
    
}
console.log(`-------------traversing an array in reverse order------------------`);
for (let index = arrayList.length-1; index >= 0; index--) {
    const element = arrayList[index];
    console.log(element);
    
    
}
console.log(`-------------print only even index elements------------------`);
for (let index = 0; index < arrayList.length; index++) {
    if (index%2==1) {
        const element = arrayList[index];
        console.log(element);
        
    }
    
    
}



