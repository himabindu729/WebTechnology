// function execution context
// console.log("Start");
// var a=10;
// var b=12;
// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(a,b);
// console.log("End");

// console.log("Start");
// var a=10;
// var b=12;
// function sub(a,b){
//     var num1=55;
//     var num2=56;
//     console.log(num1+num2);
//     return a-b;
// }
// console.log(sub(a,b))
// console.log("End");

// console.log("Start");
// var val=(function(){
//     console.log("this is IIFE");
//     return "this is return String"
// })();
// console.log(val);
// console.log("End");

// console.log("Start");
// function parent(){
//     console.log("This is parent Function");
//     function child(){
//         console.log("This is child Function")
//     }
//     child();
//     console.log("end of parent Function")
// }
// parent()
// console.log("End");

// console.log("Start");
// function parent(){
//     console.log("This is parent Function");
//     function child(){
//         console.log("This is child Function")
//     }
//     console.log("end of parent Function")
//     return child;
// }
// var fun=parent()
// fun();
// console.log("End");

console.log("Start");
function parent(){
    var num1=10;
    var num2=12;
    function child(){
        console.log(num1+num2)
    }
    child()
}
parent();
console.log("End");