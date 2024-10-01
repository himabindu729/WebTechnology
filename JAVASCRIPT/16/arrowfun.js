// Arrow function can be wriitten in many syntax

// variable id=()=>{
//     statements;
// }    
//with no parameters and multiple statements
var printTheStatements=()=>{
    console.log("This is a Arrow function");
    console.log("This is a shortest way of writing a function")
}
printTheStatements();

// variable id=()=>statement;  
//used when we have no parameters and have single statement
var oneStatement=()=>console.log("This have one statement");
oneStatement();

// variable id=parameter=>statement;       
//used when we have one parameter 
var onepara=num1=>console.log(`The number is ${num1}`);
onepara(25);

// variable id=parameter=>{
//     multiple statements; 
// }  
//used when we have one parameter and multiple statements
var onepara2=age=>{
    console.log("This is Arrow function");
    console.log("This have one parameter but multiple statements");
    console.log(`The age is ${age}`)
}
onepara2(21);

// used when we have multiple parameters and statements
// var num1=prompt("Enter the Value of Num1");
// var num2=prompt("Enter the Value of Num2");
// var op=(num1,num2)=>{
//     console.log(`Addition between ${num1} and ${num2} id ${Number(num1)+Number(num2)}`);
//     console.log(`Subtraction between ${num1} and ${num2} id ${Number(num1)-Number(num2)}`);
//     console.log(`Multiplication between ${num1} and ${num2} id ${Number(num1)*Number(num2)}`);
//     console.log(`Division between ${num1} and ${num2} id ${Number(num1)/Number(num2)}`);
//     console.log(`Modulus between ${num1} and ${num2} id ${Number(num1)%Number(num2)}`);
//     console.log(`Exponent between ${num1} and ${num2} id ${Number(num1)**Number(num2)}`);
// }
// op(num1,num2)

var str=prompt("Enter a String to count vowels");
str=str.toLowerCase()
var c=0;
var count=str=>{
    for(i=0;i<=str.length-1;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            count++;
        }
    }
    console.log(c);
}
count()

// arrow function with return type
var add=(a,b)=>{return a+b}
var value1=add(12,15);
console.log(value1);
console.log(add(25,40));


