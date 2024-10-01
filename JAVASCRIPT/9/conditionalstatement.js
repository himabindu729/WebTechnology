// ---------if satement-------
// var bool=confirm("Had your breakfast")
// if (bool==true){
//     console.log("let's have some coffee")
// }

// ---------if-else statement---
// var bool=prompt("Had your lunch")
// if (bool==null){
//     console.log("let's have some briyani")
// }
// else{
//     console.log("yahh the briyani is super")
// }

// -------else if statement----------
// var bool=prompt("What you had for lunch?");
// if (bool==null){
//     console.log("Have the lunch and come")
// }
// else{
//     if(bool=="Briyani"){
//         console.log("Wowww i like briyani");
//     }
//     else if(bool=="Fish"){
//         console.log("Fish is good is for eye");
//     }
//     else if(bool=="egg"){
//         console.log("Ewww EGGG ");
//     }
//     else if(bool=="pulihora"){
//         var whatFav=prompt("Which pilihora??")
//         if(whatFav=="Lemon"){
//             console.log("Good");
//         }
//         else if(whatFav=="Tomato"){
//             console.log("verygood")
//         }
//         else if(whatFav=="Mango"){
//             console.log("Mangooo wow")
//         }
//         else{
//             console.log("I don't know what it is???")
//         }
//     }
// }

// ----------switch----------
var num1=prompt("Enter the value of num1");
var num2=prompt("Enter the value of num2");
var op=prompt("Enter the Operation to be performed");
op=op.toLowerCase();
switch(op){
    case "add":console.log(`Add of ${num1} and ${num2}:${Number(num1)+Number(num2)}`);
    break;
    case "sub":console.log(`sub of ${num1} and ${num2}:${num1-num2}`);
    break;
    case "mul":console.log(`mul of ${num1} and ${num2}:${num1*num2}`);
    break;
    case "div":console.log(`div of ${num1} and ${num2}:${num1/num2}`);
    break;
    case "mod":console.log(`mod of ${num1} and ${num2}:${num1%num2}`);
    break;
    case "exp":console.log(`exp of ${num1} and ${num2}:${num1**num2}`);
    break;
    default:console.log("Enter the value")
}