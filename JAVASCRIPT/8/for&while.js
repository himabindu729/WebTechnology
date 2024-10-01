// for(i=1;i<=10;i++){
//     //console.log("This is For Loop");
//     console.log(i);
// }

//prg for multiplication table collect the number from the user
// var num=prompt("Enter the Number for multiplication");
// for(i=1;i<=10;i++){
//     console.log(num+"*"+i+"="+num*i)
// }

// var num=prompt("Enter the Number for multiplication");
// for(i=10;i>=1;i--){
//     console.log(num+"*"+i+"="+num*i)
// }

// var num=prompt("Enter the Number for multiplication");
// var i=1;
//     while (i<=10){
//     console.log(num+"*"+i+"="+num*i);
//     i++;
// }

// var num=prompt("Enter the Number for multiplication");
// var i=10;
//     while (i>=1){
//     console.log(num+"*"+i+"="+num*i);
//     i--;
// }

var num = prompt("Enter the Number for multiplication");
var i = 10;
var result = "";
while (i >= 1) {
    result += num + " * " + i + " = " + (num * i) + "<br>";
    i--;
}
document.getElementById("mul").innerHTML = result;

// for is used when we know no of iterations
// and while is used when we know condition



