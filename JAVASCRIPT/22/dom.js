//INDIRECT METHODS OF DOM
// document.getElementById-----Returns a reference to the first object with the specified value of the ID attribute.

// Document.getElementsByClassName--Returns a HTMLCollection of the elements in the object on which the method was invoked 
// (a document or an element) that have all the classes given by classNames.store in the form of collection

// var headingTag=document.getElementsByClassName("heading");
// console.log(headingTag);
// //for particular index values
// // headingTag[0].innerHTML="1st Heading Tag"
// // headingTag[1].innerHTML="2st Heading Tag"
// //for all indexes
// for(i=0;i<=headingTag.length-1;i++){
//     headingTag[i].innerHTML=`${i+1} heading tag`
// }

// document.getElementsByTagName---Retrieves a collection of objects based on the specified element name.store in the form of collection

// var headingTag=document.getElementsByTagName("h1")
// console.log(headingTag)
// headingTag[0].innerHTML="This is 1st Tag";

// getElementsByName---Gets a collection of objects based on the value of the NAME or ID attribute.store in the form of nodelist 

var headingTag=document.getElementsByName("heading")
console.log(headingTag)
headingTag[0].innerHTML="This is 1st Element";