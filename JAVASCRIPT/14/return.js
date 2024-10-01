var amountICIC=prompt("Enter the loan Amount");
var interestICIC=prompt("Enter the Interest");
var timeDueICIC=prompt("Enter the time duration to return the loan amount");

function bikeLoan(amount,interest,timeDue){
    console.log(`I brought a bike of ${amount}`);
    console.log(`Duration of the loan is ${timeDue}`);
    console.log(`We must return the interest of ${interest}%`);
    let intAmount=(amount*interest*timeDue)/100;
    console.log(`The interest amount to be returned is ${intAmount}`);
    let totalAmount=Number(intAmount)+Number(amount);
    return totalAmount;
}
ICIC=bikeLoan(amountICIC,interestICIC,timeDueICIC);
console.log(`Returned Total Amount to ICIC bank is ${ICIC}`);

var amountHDFC=prompt("Enter the loan Amount");
var interestHDFC=prompt("Enter the Interest");
var timeDueHDFC=prompt("Enter the time duration to return the loan amount");

HDFC=bikeLoan(amountHDFC,interestHDFC,timeDueHDFC);
console.log(`Returned Total Amount to HDFC bank is ${HDFC}`);

