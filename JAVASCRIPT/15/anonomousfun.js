// Anonomous function
// var fun=function(){
//     console.log("This is an Nameless Function");
//     console.log("Anonomous function is a nameless function where variable is assigned is function with id and call function with idname");   
// }
// fun();

// // function with arguments
// var add=function(num1,num2){
//     console.log(num1+num2);
// }
// add(20,55);

// // function with return type
// var add=function(num1,num2){
//     return num1+num2;
// }
// var addedvalue=add(45,67);
// console.log(addedvalue);

// write a anonomous function to convert  fahrenheit to celsius
// write a anonomous function to calculate factorial of a number

// var num=prompt("Enter the number");
// num=Number(num);
// var factorial=function(){
// var fact=1;
// for(i=1;i<=num;i++){
//     fact=fact*i
//     }
//     console.log(fact);
// }
// factorial();

// var fan=prompt("Enter the Temp in fahrenheit");
// var celsius=function(fan){
//     return (fan-32)*5/9;
// }
// var actualCel=celsius(fan);
// console.log(`${fan}f to ${actualCel}deg`);

// celsiuns to fahrenheit
var c=prompt("Enter the Temp in celsius");
var fah=function(c){
    return c(9/5)+32;
}
var actualfah=fah(c);
console.log(`${c}deg to ${actualfah}f`);
