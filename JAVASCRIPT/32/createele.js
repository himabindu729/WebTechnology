// creating a division tag,to visible on the body we need use appendChild method 
let divTag=document.createElement("div");
console.log(divTag);
document.body.appendChild(divTag);
divTag.style.width="200px"
divTag.style.height="200px"
divTag.style.backgroundColor="red"

// to add another division tag at the center
let divTag2=document.createElement("div");
divTag.appendChild(divTag2)

divTag2.style.width="100px"
divTag2.style.height="100px"
divTag2.style.backgroundColor="yellow"

divTag.style.display="flex"
divTag.style.alignItems="center"
divTag.style.justifyContent="center"
