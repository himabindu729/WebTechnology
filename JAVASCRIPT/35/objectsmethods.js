// freeze()--it doesnot allow us to change or edit the data from that object 
// var student={
//     sName:"Jay",
//     sGender:"Male",
//     sCalss:10,
//     sEmail:"jay123@gmail.com",
//     sPhno:68987698876
// }
// console.log(student);
// Object.freeze(student);
// delete student.sEmail;
// student.sName="rahul"
// console.log(student);

// seal()---we can edit the data but cannot delete the data
var student={
    sName:"Jay",
    sGender:"Male",
    sCalss:10,
    sEmail:"jay123@gmail.com",
    sPhno:68987698876
}
console.log(student);
Object.seal(student);
delete student.sEmail;
student.sEmail="bin@gmail.com"
console.log(student);

