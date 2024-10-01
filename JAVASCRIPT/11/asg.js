var num=prompt("Enter the Number");
if(num==0){
    console.log(`${num} is zero`);
}
else if (num>0){
    console.log(`${num} is Positive`);
        if(num%2==0){
            console.log(`${num} is Even`);
        }
        else{
            console.log(`${num} is Odd`);
        }
    }
else{
    console.log(`${num} is Not positive`)
}

// var num=prompt("Enter the marks");
// if (num>90){
//     console.log("Grade A");
// }
// else if(num>80){
//     console.log("Grade B");
// }
// else if(num>70){
//     console.log("Grade C");
// }
// else if(num>60){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }


// leap year or not
// let year = prompt("Enter a year:");
// year=Number(year)
// if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//     console.log(`${year} is a leap year.`);
// } 
// else {
//     console.log(`${year} is not a leap year.`);
// }


// largest among three numbers
// var num1=prompt("Enter the num1");
// var num2=prompt("Enter the num2");
// var num3=prompt("Enter the num3");
// if (num1 >= num2 && num1 >= num3) {
//     largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// } else {
//     largest = num3;
// }
// console.log(`The largest number among ${num1}, ${num2}, and ${num3} is ${largest}.`)
                                              
 
// var num = prompt("Enter a Number");
// num = Number(num); 

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
// } 
// else if (num % 3 == 0) {
//     console.log("Fizz");
// } 
// else if (num % 5 == 0) {
//     console.log("Buzz");
// } 
// else {
//     console.log(num);
// }


// string is palindrome or not
// var str=prompt("Enter the String");
// var reversedstr="";
// for(i=str.length-1;i>=0;i--){
//     reversedstr+=str[i]
// }
// console.log(reversedstr);
// if(str==reversedstr){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not Palindrome")
// }


// given number is prime or not
// var num=prompt("Enter the number");
// num=Number(num)
// var count=0;
// for(i=1;i<=num;i++){
//     if(num%i==0){
//         count++;
//     }
// }
// if(count==2){
//     console.log(num + " is a prime number.");
// } else {
//     console.log(num + " is not a prime number.");
// }

// fibonacci sequence up to a given no of terms
//  num=prompt("Enter a number")
// num=Number(num)
// var a=0;
// var b=1;
// console.log(a);
// console.log(b);

// var i=0;
// while(i<num-2){
//     var c=a+b
//     console.log(c);
//     a=b;
//     varb=c;
//     i++;
// }