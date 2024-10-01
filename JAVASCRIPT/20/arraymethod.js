// keys()----Returns an iterable of keys(index position) in the array
// var arr=["Apple","Banana","Watermelon","Mango","Orange"]
// var arrIterator=arr.keys();
// for (i of arrIterator){
//     console.log(i);
// }
// console.log(arrIterator)

// values()----Returns an iterable of values(index position values) in the array
// var arr=["Apple","Banana","Watermelon","Mango","Orange"]
// var arrIterator=arr.values();
// for (i of arrIterator){
//     console.log(i);
// }
// console.log(arrIterator)

// entries()----Returns an iterable of both key, value pairs for every entry in the array
// var arr=["Apple","Banana","Watermelon","Mango","Orange"]
// var arrIterator=arr.entries();
// console.log(arrIterator)
// for (i of arrIterator){
//     console.log(i);
// }

//map()---Calls a defined callback function on each element of an array, and returns an array that contains the results.
// var num=[2,3,5,4,6,7,1,3,9,6,7,56,71];
// console.log(num)
// var num1=num.map(function(num){
//     return num*2;
// })
// console.log(num1)

// var num=[2,3,5,4,6,7,1,3,9,6,7,56,71];
// var num1=num.map(function(num){
//     if(num%2==0){
//         return num;
//     }
//     else{
//         return num+1;
//     }
// })
// console.log(num1)

// var arr=["Apple","Banana","Watermelon","Mango","Orange"]
// var arr1=arr.map((arr)=>{
//     return arr.toUpperCase();
// })
// console.log(arr1)

// var arr=[1,2,3,5,6,7,33,6,8,91,56,71];
// console.log(arr)
// var num1=arr.map(function(arr){
//     return Math.sqrt(arr);
// })
// console.log(num1);

// Boolean()----returns true or false
// var arr=[0,1,"","hi",null,undefined,NaN];
// var arr1=arr.map((arr)=>{
//     return Boolean(arr);
// })
// console.log(arr1);

//multiply each value in array with index position
// var arr=[1,5,4,3,7,6,8,2,3,32,10,11,64];
// var arr1=arr.map((arr,index)=>{
//     return arr*index;
// })
// console.log(arr1);

//extract string from 0 to 5 using slice(0,5)---- ['this ', 'have ', 'big s', 'it fe']
// var arr=["this is","have a apple","big string","it feels good"];
// var arr1=arr.map((arr)=>{
//     return arr.slice(0,5);
// })
// console.log(arr1);

// flat()---Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// var arr=["red",[[[["Apple"],"mango"],"banana"],"grapes"]];
// console.log(arr);
// console.log(arr.flat(4));

// var arr=[[[["apple"]]]]
// console.log(arr.flat(3));

// fill(value: string, start: number, end: number)
// Changes all array elements from start to end index to a static value and returns the modified array
// var arr=["Apple","Banana","Watermelon","Mango","Orange"]
// console.log(arr);
// var arr1=arr.fill("red",1,3);
// console.log(arr1)

// find()----Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// find is higher order function we need to pass call back function.
// var arr=["Apple","Banana","Watermelon","Mango","Orange"]
// console.log(arr);
// var arr1=arr.find((arr)=>{
//     return arr.length>5
// });
// console.log(arr1)

// var arr=[1,5,4,3,7,6,8,2,3,32,35,81,10,11,64];
// var arr1=arr.find((arr)=>{
//     if(arr>32){
//         return arr%2==0;
//     }
// });
// console.log(arr1);

// find the age above 80.
var age=[4,8,5,1,18,23,25,45,89,77,14]
var arr=age.find((age)=>{
    return age>18;
});
console.log(arr)