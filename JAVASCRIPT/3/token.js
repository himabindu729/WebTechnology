// only declaration ---var and let possible ,const not possible
// var a=25;
// console.log(a);

// let b=35;
// console.log(b);

// const c=45;
// console.log(c);

// declaration and initialization--- var,let,const possible
var a=100;
console.log(a);
a="Apple"
console.log(a);

let b=300;
console.log(b);
b="Apple"
console.log(b);

const c=500;
console.log(c);
c="Apple"
console.log(c);


// reinitialization-----var,let possible and const not possible
var a=225;
console.log(a);
a=335
console.log(a);

let a=225;
console.log(a);
a=335
console.log(a);

const a=225;
console.log(a);
a=335
console.log(a);

// redeclaration---- var is possible and let,const not possible
var a=10;
console.log(a);
var a=20;
console.log(a);

let a=10;
console.log(a);
let a=20;
console.log(a);

const a=10;
console.log(a);
const a=20;
console.log(a);

// hoisting--using variable before declaration---var is posssible and let,const not possible
console.log(a);
var a=1000;
console.log(a);

console.log(a);
let a=1000;
console.log(a);

console.log(a);
const a=1000;
console.log(a);

// block scope--- (a is not defined) let and const are function scope
{
    var a=10;
    let b=12;
    const c=14;
}
console.log(a);

// function scope--- var is function scope
function fun(){
    var a=10;
}
fun()
console.log(a);

// value
var num1=45;
console.log(typeof num1);

var str="hi hello how r u";
console.log(typeof str);

let char="j"
console.log(typeof char)

let bool=true;
console.log(typeof bool);

let num2=NaN;
console.log(typeof num2);

let num3=undefined;
console.log(typeof num3);
