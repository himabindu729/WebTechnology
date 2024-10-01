// length porperty 
// var str="Apple";
// console.log(str.length);

// for(i=0;i<=str.length-1;i++){
//     console.log(str[i])
// }

// slice function--it is used to create a new string from the existing string--slice(starting index num,ending index num)
// follow top to bottom, left to right 
// let str="Apple is a Company";
// console.log(str);
// console.log(str.slice(0,6));
// console.log(str.slice(10));
// console.log(str.slice(-7,17));
// console.log(str.slice(-13,0));  //empty string
// console.log(str.slice(-3,-8));  //empty string

// substring method----substring(SI,EI)---negative value is considered as "0"
// var str="Apple is a company";
// console.log(str.substring(7,13));  
// console.log(str.substring(11,5)); //considered as 5,11
// console.log(str.substring(-5,10));
// console.log(str.substring(-5,-10));
// console.log(str.substring(18,0));
// console.log(str.substring(-6));

// substr is a depricated string--method removed from js--substr(SI,no of char(length))
// let str="Apple is a Company";
// console.log(str);
// console.log(str.substr(2,3));
// console.log(str.substr(6,2));
// console.log(str.substr(18,5));
// console.log(str.substr(-18,5));

// trim()--is used to remove starting and ending space,trimStart()--remove starting space,trimEnd()--remove ending space
// var str=" apple "
// // var str1=str.trim();
// // var str1=str.trimStart();
// var str1=str.trimEnd();
// console.log(str);
// console.log(str1);

//padStart(),padEnd()--2 arguemts we need to pass maxlength,filling
// var str="Apple";
// var str1=str.padStart(16,"mango");  //mangomangomApple
// var str2=str.padEnd(25,45);         //Apple45454545454545454545
// console.log(str1);
// console.log(str2);

//replace()--replace the starting occurance of the string
//replaceAll()--replace all occurances
// let str="Tom like orange so tom brought 1kg of orange,orange.";
// let str2=str.replace("orange","watermelon");
// let str3=str.replaceAll("orange","watermelon");
// console.log(str2)
// console.log(str3)

// var str4=`She sells seashells by the seashore,
// The shells she sells are surely seashells.
// So if she sells shells on the seashore,
// I'm sure she sells seashore shells.` 
// var str1=str4.slice(0,95);
// console.log(str1);
// var str2=str4.slice(96);
// console.log(str2);
// str2=str2.replace("shells"," sai");
// str4=str1+str2;
// console.log(str4);

//string to array
var str=`She sells seashells by the seashore,
The shells she sells are surely seashells.
So if she sells shells on the seashore,
I'm sure she sells seashore shells.` 
console.log(str);
console.log(typeof str);

var arr=str.split(" ");
console.log(arr);
console.log(typeof arr);