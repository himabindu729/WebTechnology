// type casting-- converting from one datatype to other
// implicit conversion---convert automatically --return not object as output
// explicit conversion--convert by constructor or function--return object as output 

// string type conversion
// var num1=10;
// var num2="10";
// num1=num1+num2;
// console.log(num1,typeof num1);  (1010,string)

//  other than addition it convert to number type only
// number type conversion
// var num1=10;
// var num2="10";
// num1=num1*num2;
// console.log(num1,typeof num1);  

// number type conversion
// var num1=10;
// var num2="10";
// num1=num1%num2;
// console.log(num1,typeof num1);

// boolean type conversion
// var num1=10;
// var num2="10";
// num1=num1>num2;
// console.log(num1,typeof num1);

// explicit conversion--constructors,functions are used
//  string to number--Number()
// var num1="10"
// console.log(num1,typeof num1);
// num1=Number(num1);
// console.log(num1,typeof num1);  (10 ,number)

// var num1="10.55"
// console.log(num1,typeof num1);
// num1=Number(num1);
// console.log(num1,typeof num1); (10,number)

// var num1="10.5apple"
// console.log(num1,typeof num1);
// num1=Number(num1);
// console.log(num1,typeof num1);  (NaN, number)

// boolean to number type
// var bool=false;
// console.log(bool,typeof bool);   (false,boolean)
// bool=Number(bool);
// console.log(bool,typeof bool);   (0,false)

// number type conversion  --parseInt()(a34.4 doesnot work gives NaN,  used when we consider only interger value only)
// var num1="45.5apple"
// console.log(num1,typeof num1);
// num1=parseInt(num1);
// console.log(num1,typeof num1);   (45, number)

// var num1="45.5apple"  ---parseFloat()
// console.log(num1,typeof num1);
// num1=parseFloat(num1);
// console.log(num1,typeof num1);  (45.5, number)

//prompt takes the value as string
// var num1=prompt("Enter the value of Num1");
// var num2=prompt("Enter the value of Num2");
// document.getElementById("num1").innerHTML=Number(num1)+Number(num2);

var numberOfaple1=prompt("Enter the slot one Apple count");
var numberOfaple2=prompt("Enter the slot two Apple count");
document.getElementById("num2").innerHTML=parseFloat(numberOfaple1)+parseFloat(numberOfaple2);
