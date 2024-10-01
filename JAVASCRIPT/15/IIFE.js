// (function(){
//     console.log("This is IIFE")
// })();

// (function(){
//     console.log("In the first () we need to specify anonomous function and second () is calling the function")
// })();

// (function(num1,num2){
//     console.log(num1+num2)
// })(5,6);

// For IIFE,it will return the variable in which we pass the value and for named function it will return the code when we print
// var add=(function(num1,num2){
//             return num1+num2;
//         })(5,6);
// console.log(add);

// accessing the values using arguments --it can replace the values
var add=function(num1,num2,num3){
    num1=1;
    num2=2;
    num3=3;
    return arguments[0]+arguments[2]
}
console.log(add(4,2,6))   //4

// `function hoisting --calling the function before declaration is possible only in named function`
// not possible for anonomous function,arrow function ,....
add()
function add(){
    console.log(45+55)
}


add();
var add=function(){
    console.log(45+55)
}