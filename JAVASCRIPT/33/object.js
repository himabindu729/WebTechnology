// object is a collection of key and value pair---wecan access object by using 
// 1.by dot notation(.)
// 2.by array notation(["key"])

// -------object by using lietrals-------
// let obj={
//     one:"This is One",
//     two:"This is Two",
//     three:"This is Three",
//     4:"This is Four"
// }
// console.log(obj);
// console.log(obj.one);  //by using dot notation
// console.log(obj["one"]);   //by using array notation
// // console.log(obj.4)  ----we cannot access because the number is considered as string
// console.log(obj[4])

// -----by using New keyword(to create object) followed by object constructor-----
// inserting properties inside the object
// let colours=new Object()
// console.log(colours)
// colours.colo1="Red";
// colours.colo2="Green";
// // accessing the values
// console.log(colours.colo1);
// console.log(colours["colo2"]);

// function constructor
// creating object by using constructor
// function Employee(empName,empId,empSal,empDep,empExp,empDesg,empEmail,empPhno){
//     this.eName=empName;
//     this.eId=empId;
//     this.eSal=empSal;
//     this.eDep=empDep;
//     this.eExp=empExp;
//     this.eDesg=empDesg;
//     this.eEmail=empEmail;
//     this.ePhno=empPhno;
// }
// let abhi=new Employee("Abhi","jsp35","45.5LPA","R&D",18,"Manager","abhi71@gmail.com",5643289067);
// console.log(abhi)

// let hima=new Employee("Hima","jsp25","6LPA","R&D",0,"trainee","hima25@gmail.com",75846593903);
// console.log(abhi)

// console.log(abhi.eSal)
// console.log(hima.eName)

// -----create a object by using function consctructor car,it must have properties like brand,model,year,colour,owner name
// function Car(carBrand,carModel,carYear,carColour,carOwner){
//     this.cBrand=carBrand;
//     this.cModel=carModel;
//     this.cYear=carYear;
//     this.cColour=carColour;
//     this.cOwner=carOwner;
// }
// let rover=new Car("Rangerover","Sport",2020,"Black","HimaBindu");
// console.log(rover)

// ------create a object by using function consctructor book,it must contain title,author,pages,book launch year
// console.log(rover.cOwner)

// function Book(bookTitle,bookAuthor,bookPages,bookLaunchyear){
//     this.bTitle=bookTitle;
//     this.bAuthor=bookAuthor;
//     this.bPages=bookPages;
//     this.bLaunchyear=bookLaunchyear;
// }
// let encyclo=new Book("Encyclopedia","ABCD",120,2000)
// console.log(encyclo)
// console.log(encyclo.bPages)

function BankAccount(owner,balance){
    this.owner=owner;
    this.balance=balance;
    this.deposit=function(amount){
        this.balance+=amount;
        console.log(`${this.owner} deposited ${amount} New Balance:${this.balance}`)
    };
    this.withdraw=function(amount){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log(`${this.owner} withdraw ${amount} New Balance:${this.balance}`)
        }
        else{
            console.log(`Insufficient Fund for ${this.owner}`)
        };
    };
}
let raghuAcc=new BankAccount("Raghu",1000);
console.log(raghuAcc)
raghuAcc.deposit(3000);
raghuAcc.withdraw(4000);
raghuAcc.withdraw(100);
raghuAcc.deposit(250);

// write a program for library object in which we must be able to create the object in the name of library 
// in which we must be able to store the books revoke the books and category of the book

function Library(libName,)