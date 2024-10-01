// rest opeartor----(...arg represents multiple parameters,used in LHS )
// function fun(a,b,c,d,...arg){
//     console.log(a*b);
//     console.log(c-d);
//     console.log(arg);
//     var sum=0;
//     for(i=0;i<=arg.length-1;i++){
//         sum+=arg[i]
//     }
//     console.log(sum);
// }
// fun(4,5,7,3,8,9,2,6,55,66,86,90,23,35,25,0);

// array destructuring
// var [a,b]=["first","second"];
// console.log(a);
// console.log(b);

// array destructuring by using rest operator 
// var[a,b,...col]=["red","blue","white","black","yellow","pink","purple","green","orange"]
// console.log(a);
// console.log(b);
// console.log(col);

// object destructuring by using rest operator, the same property should be used to access the values
var numList={
    num1:25,
    num2:35,
    num3:44,
    num4:76,
    num5:12,
    num6:18
}
var {num1,num2,...rest}=numList;
console.log(num1);
console.log(num2);
console.log(rest);
