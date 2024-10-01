// ------shallow copy------the original object and the copy object has the same reference object,
// The changes in the original object also effect the copy object.

// var arr=["red","orange","blue","green"];
// var copyArr=arr;
// console.log(arr);
// console.log(copyArr);
// copyArr[0]="apple";
// console.log(arr);
// console.log(copyArr);

// var obj={
//     col1:"bike",
//     col2:"car",
//     col3:"cycle"
// }
// var copyObj=obj;
// console.log(obj);
// console.log(copyObj);
// copyObj[0]="aeroplane";
// console.log(obj);
// console.log(copyObj);

// ... in RHS is Spread operator  and ... in LHS is rest

// ------deep copy------the original object and the copy object has its own reference object,
// deep copy is not performed in subarray ,it is performed only to outer array
// var arr=["red","blue",["black","white"],"yellow"];
// var copyArr={...arr};    //spread oprerator in deep copy doesnot effect any changes to the original array
// console.log(arr);
// console.log(copyArr);
// copyArr[0]="apple"
// copyArr[2][0]="gray";
// console.log(arr); 
// console.log(copyArr);

// var obj={
//     col1:"bike",
//     col2:"car",
//     col3:"cycle",
//     nest:{
//         ncol1:"black",
//         ncol2:"white"
//     }
// }
// var copyObj={...obj};
// console.log(obj);
// console.log(copyObj);

// copyObj[0]="aeroplane";
// copyObj.nest.ncol1="gray";
// console.log(copyObj);

// by using methods
// var obj={
//     col1:"bike",
//     col2:"car",
//     col3:"cycle",
//     nest:{
//         ncol1:"black",
//         ncol2:"white"
//     }
// }
// var copyObj=Object.assign({},obj);
// console.log(obj);
// console.log(copyObj);
// copyObj.col1="Jack"
// copyObj.nest.ncol1="red"
// console.log(obj);
// console.log(copyObj);

// var arr=["red","blue",["black","white"],"yellow"];
// var copyArr=Object.assign({},arr);
// console.log(arr);
// console.log(copyArr);
// copyArr[0]="Jack"
// copyArr[2][0]="red"
// console.log(arr);
// console.log(copyArr);

// by using (JSON Methods)----stringify(Converts a JavaScript value to a JavaScript Object Notation (JSON) string) 
// and parse(Converts a JavaScript Object Notation (JSON) string into an object)
// var obj={
//     col1:"bike",
//     col2:"car",
//     col3:"cycle",
//     nest:{
//         ncol1:"black",
//         ncol2:"white"
//     }
// }
// var str=JSON.stringify(obj);
// console.log(str);
// console.log(typeof str);   //string

// var copyObj=JSON.parse(str);
// console.log(copyObj);
// console.log(typeof copyObj);    //object

// copyObj.col1="gray";
// console.log(obj);
// console.log(copyObj);

// copyObj.nest.ncol1="sun";
// console.log(obj);
// console.log(copyObj);

// var obj={
//     col1:"bike",
//     col2:"car",
//     col3:"cycle",
//     nest:{
//         ncol1:"black",
//         ncol2:"white"
//     }
// }
// var copyObj=JSON.parse(JSON.stringify(obj));
// console.log(copyObj);
// console.log(typeof copyObj); 

// copyObj.col1="gray";
// console.log(obj);
// console.log(copyObj);

// copyObj.nest.ncol1="sun";
// console.log(obj);
// console.log(copyObj);

// var arr=["red","blue",["black","white"],"yellow"];
// var copyArr=JSON.parse(JSON.stringify(arr));
// console.log(copyArr);
// console.log(typeof copyArr); 

// copyArr[0]="gray";
// console.log(arr);
// console.log(copyArr);

// copyArr[2][0]="moon";
// console.log(arr);
// console.log(copyArr);

// ------To get keys and values of object----
var obj={
    col1:"bike",
    col2:"car",
    col3:"cycle",
    nest:{
        ncol1:"black",
        ncol2:"white"
    }
}
var objKey=Object.keys(obj);
console.log(objKey);

var objKeynes=Object.keys(obj.nest);
console.log(objKeynes);

var objVal=Object.values(obj);
console.log(objVal);

var objValnest=Object.values(obj.nest)
console.log(objValnest);

var objValKey=Object.entries(obj);
console.log(objValKey)
