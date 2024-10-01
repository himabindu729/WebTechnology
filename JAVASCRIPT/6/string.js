// string disadvantages
// string cannot support multi line string gets token error and " " inside " "(multiple double quotes) gives number error 
// let str1="I have 20 rs and i given it to my friend";
// console.log(str1);
// let str2='I have 2rs';
// console.log(str2);

// String constructor
// let str=String("I have given a Apple to the doctor");
// console.log(str);
// console.log(typeof str);

// back tick support multi line string,multiple double and single quotes,string interpolation
// str=`string represented in "back tick" support 'multi line string',
// 'multiple double and single quotes',
// 'string interpolation'. `
// console.log(str,typeof str);

// document.getElementById("container").innerHTML=`
//         <form action="">
//             <input type="email" placeholder="Enter your Email">
//             <br><br>
//             <input type="password" placeholder="Enter your Password">
//             <br><br>
//             <input type="submit" value="Login" >
//         </form>`

// interpolation--${ } is used to add variable,object,function in string, possible ony in backtick
// var num=prompt("Enter the Number of Apples");
// var str=`I have ${num} Apples`
// console.log(str);

// console.log(`Current date and Time is ${Date()}`);

// console.log(`This is RandomNumber ${Math.random()*10}`)

// var num1=prompt("Enter the num1");
// var num2=prompt("Enter the num2");
// console.log(`Addition of ${num1} and ${num2} is ${Number(num1)+Number(num2)}`)


//<span> element is used to color a part of text
var color=prompt("Enter the color name");
var carName=prompt("Enter the car name");
document.getElementById("container").innerHTML=`<h1> I brought a <span style="color:${color}">${color}</span> colour <span style="color:${color}"> ${carName} </span> car.</h1>`
