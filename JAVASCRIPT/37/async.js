// <!-- if we want use parallel data at a time(milliseonds) we use Asynchronous coding (example--amazon)-->
// function fun1(){
//     console.log("This is first function");
// }

// function fun2(){
//     console.log("This is second function");
// }
// setTimeout(fun1,2000);
// setTimeout(fun2,2000);

// by using arrow function
// setTimeout(()=>{
//     console.log("This is 1st message");
//     setTimeout(()=>{
//         console.log("This is 2nd message");
//         setTimeout(()=>{
//             console.log("This is 3rd message");
//         },3000)
//     },2000)
// },1000)

// looping by using setTimeout()
// for(var i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log("This is after"+i);
//     },i*1000);
// }

// count using button
var count=window.prompt("Enter the seconds to be counted");
let countdown=()=>{
    if(count>0){
        document.querySelector("h1").innerHTML=count;
        count--;
        setTimeout(countdown,1000);
    }
    else{
        document.querySelector("h1").innerHTML="Time Up";
    }
}
