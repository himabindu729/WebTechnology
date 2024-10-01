// prototype chaining---Every object returns an null value and prototype,object
// prototype is used to borrow function from another object
var operation={
    add:function(a,b){
        return a+b;
    }
}
var sub={
    sub:function(a,b){
        return a-b;
    }
}
var mul={
    mul:function(a,b){
        return a*b;
    }
}
var div={
    div:function(a,b){
        return a/b;
    }
}
operation.__proto__=sub;
sub.__proto__=mul;
mul.__proto__=div;
console.log(operation)
console.log(operation.add(7,8))
console.log(operation.sub(6,9))
console.log(operation.mul(3,4))
console.log(operation.div(16,4))