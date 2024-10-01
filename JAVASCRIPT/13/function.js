// function wedding(){
//     console.log("End of boys Happy life");
// }
// wedding();

// code reusability
// we call function from html and js
// function add(){
//     console.log(5+5);
// }
// add();
// add();
// add();
// add();
// add();

// function with arguments
// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(5,5);
// add(25,35);
// add(12,13);

//  function for area of triangle
// var a=prompt("enter the base value");
// var b=prompt("enter the height value");
// function areaOfTri(a,b){
//     console.log(0.5*a*b);
// }
// areaOfTri(a,b);

// function to reverse a string 
// var str=prompt("Enter a String");
// function revOfStr(str){
//     let reversedstr="";
//     for(let i=str.length-1;i>=0;i--){
//         reversedstr+=str[i]
//     }
//     console.log(reversedstr);
// }
// revOfStr(str)

// function that takes a number as input and returns its factorial
// var num=prompt("Enter a Number");
// num=Number(num)
// function fact(num){
//     factorial=1;
//     for(i=1;i<=num;i++){
//         factorial=factorial*i
//     }
//     console.log(factorial);
// }
// fact(num)

// var num=prompt("Enter a Number");
// function fact(num){
//     if(num<0){
//         console.log("Invalid Input");
//     }
//     else{
//         var factorial=1;
//         for(i=1;i<=num;i++){
//             factorial=factorial*i
//         }
//         console.log(factorial);
//     }
// }
// fact(num)

// function that takes a string and returns the number of vowels in the string 
// var str=prompt("Enter a string to count vowels");
// function Countvowels(str){
//     str=str.toLowerCase()
//     var count=0;
//     for(i=0;i<=str.length-1;i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// Countvowels(str)

var str=prompt("Enter a string to count vowels");
str=str.toLowerCase()
function Countvowels(str){
    let count=0;
    let vowels="aeiou"
    for(i=0;i<=str.length-1;i++){
        // console.log(vowels.indexOf(str[i]));
        if(vowels.indexOf(str[i])!==-1){
            count++;
        }
    }
    console.log(count);
}
Countvowels(str)
