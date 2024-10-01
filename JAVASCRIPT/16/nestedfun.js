// function parentFun(){
//     console.log("This is parent function");
//     function childFunction(){
//         console.log("This is child function");
//     }
//     childFunction();
// }
// parentFun();
// This is parent function
// This is child function

//we need to return the child functionname 
// function parentFun(){
//     console.log("This is parent function");
//     function childFunction(){
//         console.log("This is child function");
//     }
//     return childFunction;
// }
// var childFun=parentFun();
// childFun();
// This is parent function
// This is child function

// using arrow function
// var parentFun=()=>{
//     console.log("This is parent function");
//     var childFun=()=>{
//         console.log("This is child function");
//     }
//     return childFun;
// }
// var childFun=parentFun();
// childFun();

// parent function creates a closure when we have variables in parent function and can be accessed in child function
// function parentFun(){
//     var a=10;
//     var b=20;
//     function childFun(){
//         console.log(a+b);
//     }
//     childFun();
//     return a-b;
// }
// console.log(parentFun());

// nested function with parameters--we cannot return multiple values here it is replaced with last operation
function ariOp(num1,num2){
    function add(){
        console.log(num1+num2)
    }
    add()
    function sub(){
        console.log(num1-num2)
    }
    return sub,add;
}
var val=ariOp(5,7);






