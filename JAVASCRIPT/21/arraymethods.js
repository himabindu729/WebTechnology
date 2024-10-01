// findIndex()-----Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// var age=[4,5,18,34,56,77,47];
// var ageAbove18=age.findIndex((age)=>{
//     return age>=18;
// })
// console.log(ageAbove18);

// every()----is higher order function we need to pass call back function.
// it check inside the array that every element satisfy the condition or not and return true or fasle
// Determines whether all the members of an array satisfy the specified test.
// var age=[2,4,8,6,10,12,60]
// var arr=age.every((age)=>{
//     return age%2==0;
// })
// console.log(arr)

// some()---Determines whether the specified callback function returns true for any element of an array.
// returns true if one of the conditions is satisfied
// var age=[2,4,3,6,1,17,60]
// var arr=age.some((age)=>{
//     return age%2!=0;
// })
// console.log(arr)

// sort()----Sorts an array in place. This method mutates the array and returns a reference to the same array.
// var arr=["Apple","Mango","Orange","Pineapple","Banana","Donkey","Buffalo","Idiot","Monkey"];
// console.log(arr);
// var arrSort=arr.sort();
// console.log(arrSort)

// var arrNum=[2,4,6,7,8,9,1,3,5]
// console.log(arrNum);
// var arrSort=arrNum.sort();
// console.log(arrSort)

// we need use higher order function for double,triple,.. for sorting since each digit is considered as string
// ascending order
// var arrNum=[20,41,16,7,88,49,111,321,57]
// console.log(arrNum);
// var arrSort=arrNum.sort((a,b)=>{
//     return a-b;
// })
// console.log(arrSort)

//descending order
// var arrNum=[20,41,16,7,88,49,111,321,57]
// console.log(arrNum);
// var arrSort=arrNum.sort((a,b)=>{
//     return b-a;
// })
// console.log(arrSort)

// creating an empty array and adding elements in array
// var arr=[];
// arr[0]="red";
// arr[1]="blue";
// arr[2]="red";
// arr[3]="blue";
// console.log(arr);
// arr1=arr.delete;
// console.log(arr1);    
// console.log(arr);    //main array is not be reflected
//deleting specific element from array
// delete arr[2];
// console.log(arr);

// delete arr[1];
// console.log(arr);

//creating an array by using Array object
let arr=new Array("red","blue","orange","yellow","green");
console.log(arr)