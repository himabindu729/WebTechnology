//call back function is a function  which is passed as a argument for another fun
// higher order function takes call back fun as argument
function callbackFun(){
    console.log("This is Callback function");
}
function higherOrderFun(cFun){
    cFun();
    console.log("This is Higher order function");
}
higherOrderFun(callbackFun);
