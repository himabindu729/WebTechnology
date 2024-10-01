// Promise-------3 states:pending, resolve/fullfilled, reject
// for the promise we have to pass one function and for function we have to pass two states as arguments resolve and reject
// let promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise has been fulfilled");
//         resolve();
//     },2000);
// });
// // then()----Attaches callbacks for the resolution and/or rejection of the Promise.
// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// A callback used to initialize the promise. This callback is passed two arguments: 
// a resolve callback used to resolve the promise with a value or the result of another promise, 
// and a reject callback used to reject the promise with a provided reason or error.
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(
//             {
//                 userId:"siva@gmail.com",
//                 password:"siva@30"

//             }
//         )
//     },1000)
// }).then(function(user){
//     console.log(user);
// })

// let promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         // let error=false;
//         if(!error){
//             resolve({
//                     userId:"siva@gmail.com",
//                     password:"siva@30"
     
//             });
//         }
//         else{
//             reject('ERROR: U have not received data from the server')
//         }
//     },1000);
// })
// promiseThree.then(function(user){
//     console.log(user);
// }).catch(function(){
//     console.log("Please check your connection")
// })

// promise chaining
// let promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let error=true;
//         let error=false;
//         if(!error){
//             resolve({
//                     userId:"siva@gmail.com",
//                     password:"siva@30"
//             });
//         }
//         else{
//             reject('ERROR: U have not received data from the server')
//         }
//     },1000);
// })
// promiseThree.then((user)=>{
//         return [user.userId, user.password];
//     }).then((userData)=>{
//         console.log(userData);
//         console.log("user email: "+userData[0]);
//         console.log("user password: "+userData[1]);
//         return userData[1];
//     }).then((userPassword)=>{
//         var pass=window.prompt("Enter the password");
//         if(pass==userPassword){
//             console.log("Access Granted");
//             open("https://www.tesla.com");
//         }else{
//             console.log("Access Denied");
//         }
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// write a js function called risky operation which simulates an operation with a 50% percent chance of success 
// use a random function to generate random number with the range of 0 to 1000 
// if it is even perform the resolve state with the message as operation success
// if it is odd number perform rejected and print the message operation failed

let promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        var num=Math.trunc(Math.random()*1000);
        let error=false;
        if(num%2==0){
            resolve('Operation SUccess');
        }
        else{
            reject('Operation Failed');
        }
    },1000);
})
promiseFour.then(function(ope){
    console.log(ope)
})
        