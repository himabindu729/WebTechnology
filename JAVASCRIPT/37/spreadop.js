// spread operator is used in RHS, passed as an arguments
// merge of array------
// var arr1=[1,5,7,9];
// var arr2=[44,88,77,99];
// var mergeArr=[...arr1,...arr2]
// console.log(mergeArr);

// return one by one value to the function whereas in rest it returns entire array
// var arr=[5,7,9];
// function add(a,b,c){
//     console.log(a,b,c)
//     console.log(a+b+c);
// }
// add(...arr)

// merge of objects---------
var numList1={
    num1:25,
    num2:35,
    num3:45
}
var numList2={
    num4:66,
    num5:99,
    num6:77
}
var mergeObj={...numList1,...numList2};
console.log(mergeObj)