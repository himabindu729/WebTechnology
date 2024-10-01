// array is a collection of heterogeneous elements
//array cannot support negative indexing

// studentDetails=["saiSiva","A+",84,true,8766569054,45];
// console.log(studentDetails);
// var studentName=studentDetails[0];
// var stuGrade=studentDetails[1];
// var stuAtt=studentDetails[2];
// var stuRollno=studentDetails[5];
// var stustatus=studentDetails[3];
// var stuPhno=studentDetails[4]
// console.log(studentName);
// console.log(stuGrade);
// console.log(stuAtt);
// console.log(stuRollno);
// console.log(stustatus);
// console.log(stuPhno);

// employeeDetails=["Deepa","A23",300000,"Python Developer",2348767878];
// console.log(employeeDetails);
// var empName=employeeDetails[0];
// var empId=employeeDetails[1];
// var empSalary=employeeDetails[2];
// var empDesignation=employeeDetails[3];
// var empPhno=employeeDetails[4];
// console.log(empId);
// console.log(empName);
// console.log(empPhno);
// console.log(empSalary);
// console.log(empDesignation);

//random backgroundcolor
// var arr=["red","orange","yellow","violet","green","purple","pink","black","white","brown","blue","salmon"]
// document.body.style.backgroundColor=arr[Math.trunc(Math.random()*arr.length-1)];

//random backgroundimage
// var arr=[`url("../../ASSESTS/IMAGES/car.png")`,`url("../../ASSESTS/IMAGES/monkey-7774171_1280.jpg")`,
//     `url("../../ASSESTS/IMAGES/rocket.png")`,`url("../../ASSESTS/IMAGES/earth.png")`]
// document.body.style.backgroundImage=(arr[Math.trunc(Math.random()*arr.length-1)]);

// var arr=["birlamandir.jpeg","car.png","rocket.png","earth.png"]
// document.body.style.backgroundImage=`url(../../ASSESTS/IMAGES/${arr[Math.trunc(Math.random()*arr.length-1)]})`

var arr=["orange","apple","strawberry","banana","mango","promogranate"];
for(i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}

//for in --index values as output
for(i in arr){
    console.log(i);
}

//for of--values in array as output 
for(i of arr){
    console.log(i);
}

var str="apple"
for(i in str){
    console.log(i);
 }

