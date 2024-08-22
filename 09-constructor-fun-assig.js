// Step 1: Constructor function
console.log("---- Step 1: Constructor function ----");
function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

// Step 2: Create objects
console.log("---- Step 2: Create objects ----");
const yesBank = new Bank('YES Bank', 'Mumbai', 'YESB0000123', 'YES001');
const sbiBank = new Bank('SBI Bank', 'Pune', 'SBIN0000456', 'SBI002');
const mahBank = new Bank('Maharashtra Bank', 'Nagpur', 'MAHB0000789', 'MAH003');
const axisBank = new Bank('Axis Bank', 'Delhi', 'UTIB0000110', 'AXIS004');

// Log details of the banks
console.log(`Bank Details: Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`);
console.log(`Bank Details: Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`);
console.log(`Bank Details: Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, IFSC Code: ${mahBank.ifscCode}, Branch Code: ${mahBank.branchCode}`);
console.log(`Bank Details: Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`);

console.log("---- Step 3: Add openTime on the prototype ----");
// Step 3: Add openTime on the prototype
Bank.prototype.openTime = "9 AM IST";

console.log("---- Step 4: Add closeTime on the prototype ----");
// Step 4: Add closeTime on the prototype
Bank.prototype.closeTime = "6 PM IST";

console.log("---- Step 5: Log the openTime and closeTime of sbiBank ----");
// Step 5: Log the openTime and closeTime of sbiBank
console.log(`SBI Bank Open Time: ${sbiBank.openTime}, Close Time: ${sbiBank.closeTime}`);

console.log("---- Step 6: Log the bankName and closeTime of axisBank ----");
// Step 6: Log the bankName and closeTime of axisBank
console.log(`Axis Bank Name: ${axisBank.bankName}, Close Time: ${axisBank.closeTime}`);

console.log("---- Step 7: Log the bankName, branchCode, and openTime of yesBank ----");
// Step 7: Log the bankName, branchCode, and openTime of yesBank
console.log(`YES Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}`);
