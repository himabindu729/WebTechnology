// ---------array to string--------- join() method is used to convert array to string
// var arr=["Mango","Apple","Orange","Banana"];
// console.log(arr);
// console.log(typeof arr)
// var str=arr.join(" ");
// console.log(str);
// console.log(typeof str); 

//----reverse an array----- reverse() method is used to reverse the array
// var arr=["Mango","Apple","Orange","Banana"];
// console.log(arr);
// var arrRev=arr.reverse();
// console.log(arrRev);

//-------reverse a string------
// var str="Today is Great Day";
// console.log(str);
// var strRev=str.split('').reverse().join('');
// console.log(strRev)

// var str="Today is Great Day";
// console.log(str);
// var arr=str.split('');      //convert to array
// console.log(arr);
// var arrrev=arr.reverse();    //reverse the array
// console.log(arrrev);
// str=arrrev.join('');         // convert array to string using join()
// console.log(str);
// str=str.toLowerCase();
// console.log(str);


// filter()---Returns the elements of an array that meet the condition specified in a callback function.
// var age=[45,12,56,89,65,89,44,21,25,26];
// console.log(age);
// var filArr=age.filter(ageFil);    //named function
// function ageFil(age){
//     return age>=18 && age<=60;
// }

// var filArr=age.filter(function(age){           //ananoymous function
//     return age>=18 && age<=60;
// })

// var filArr=age.filter((age)=>{           //arrow function
//     return age>=18 && age<=60;
// })
// console.log(filArr)

//includes()----Determines whether an array includes a certain element, returning true or false as appropriate.
// var arr=["apple,","mango","orange"];
// console.log(arr.includes("banana"));

//filtering even numbers
// var arr=[4,2,0,1,9,-1,-2,6,7,9,55,41,25,620];
// console.log(arr);
// var filArr=arr.filter((arr)=>{
//     return arr%2==0;
// })
// console.log(filArr)

// filtering the array,remove array element which include "a","A" in the array
// var arr=["Apple","Hyderabad","pen","Bull","rock","mango"]
// console.log(arr);
// var filArr=arr.filter((arr)=>{
//     if (arr.includes('a') || arr.includes('A')) {
//         return false; 
//     } else {
//         return true;
//     }
// })
// console.log(filArr)

//filtering elements by length 5
// var arr=["Apple","Hyderabad","pen","Bull","rock","mango"]
// var filArr=arr.filter((arr)=>{
//     return arr.length==5;
// })
// console.log(filArr)

//filtering unique values from the array(repetation values)
// var arr = ["Apple", "Hyderabad", "pen", "Bull", "rock", "mango", "Apple", "pen"];
// console.log(arr);
// var uniqueArr = arr.filter(function(item,index) {
//     return arr.indexOf(item)===index;
// })
// console.log(uniqueArr)

//------indexOf()-------Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// var age=[23,12,45,67,18,47,53,98,12,5,89,18];
// console.log(age.indexOf(18));
// console.log(age.indexOf(18,5));
// console.log(age.lastIndexOf(18));

// push()----Appends new elements to the end of an array, and returns the new length of the array.
// var arr=["Mango","Apple","Orange","Banana"];
// console.log(arr);
// arr.push("Watermelon","promogranate");
// console.log(arr);

// pop()----Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arr);
// arr.pop();
// arr.pop();
// console.log(arr);

// shift()----Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// var arr=["Mango","Apple","Orange","Banana"];
// console.log(arr);
// arr.shift()
// console.log(arr);
// // unshift()-----Inserts new elements at the start of an array, and returns the new length of the array.
// arr.unshift("red","blue","green")
// console.log(arr);

// slice()-----Returns a copy of a section of an array
// var arr=["Mango","Apple","Orange","Banana"];
// console.log(arr)
// var arr2=arr.slice(1,3)
// console.log(arr2)

// splice()-----Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// splice(start: number, deleteCount?: number)
// var arr=["Mango","Apple","Orange","Banana"];
// console.log(arr)
// arr.splice(1,1);
// console.log(arr);

// toString()----returns a string representation of an array.
var arr=["Mango","Apple","Orange","Banana"];
console.log(arr);
var str=arr.toString();
str=str.replaceAll(","," ");
console.log(str);
console.log(typeof str)