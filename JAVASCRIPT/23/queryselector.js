// querySelector----------Returns the first element that is a descendant of node that matches selectors.
//it is used to target single element by using id or class or tagname.

// var ele=document.querySelector("#heading").innerHTML="this is ID";
// console.log(ele);

// var ele1=document.querySelector(".heading");
// console.log(ele1);

// var ele2=document.querySelector("p");
// console.log(ele2);

// // ele.innerHTML="this is ID"
// ele1.innerHTML="this is by using class"
// ele2.innerHTML="this is by using Tagname"


// querySelectorAll---------It is used to target multiple elements
var allHeading=document.querySelectorAll(".heading");
console.log(allHeading);
allHeading[0].innerHTML="This is 1st Heading tag";
allHeading[0].style.color="red"
allHeading[0].style.backgroundColor="black"


// var allParagraph=document.querySelectorAll("p");
// console.log(allParagraph);
// allParagraph[0].innerHTML="This is 1st paragraph tag";
// allParagraph[1].innerHTML="This is 2st paragraph tag";