
let sbiBank = {
    bankName: "State Bank of India",
    location: "Mumbai",
    accountNo: "1234567890",
    ifsc: "SBIN0000456",
    interestRate: "5.5%",
    showDetails: function() {
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

let axisBank = {
    bankName: "Axis Bank",
    location: "Pune",
    accountNo: "9876543210",
    ifsc: "UTIB0000231",
    interestRate: "6.0%",
    showDetails: function() {
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Bangalore",
    accountNo: "1122334455",
    ifsc: "HDFC0000987",
    interestRate: "6.5%",
    showDetails: function() {
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

let yesBank = {
    bankName: "Yes Bank",
    location: "Chennai",
    accountNo: "5566778899",
    ifsc: "YESB0000123",
    interestRate: "5.75%",
    showDetails: function() {
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

console.log(`------------------Invoke the showDetails() Function-------------------`);
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
