// var box=document.querySelector("#container")
// box.style.width="120px"
// box.style.height="120px"
// box.style.backgroundColor="red"
// box.style.borderRadius="100%"
// box.style.transform="translate(0px,0px)";
// box.style.transition="all 0.5s"

// var ani1=()=>{
//     box.style.transform="translate(80vw,0px)";
//     var ani2=()=>{
//         box.style.transform="translate(80vw,80vh)";
//         var ani3=()=>{
//             box.style.transform="translate(0vw,80vh)";
//             var ani4=()=>{
//                 box.style.transform="translate(0vw,0vh)";
//             }
//             setTimeout(ani4,1000);
//         }
//         setTimeout(ani3,1000); 
//     }
//     setTimeout(ani2,1000);
// }
// setTimeout(ani1,1000);

var str="Hello World";
var ind=0;
let type=()=>{
    if(ind<str.length){
        document.querySelector("#container").innerHTML+=str.charAt(ind);
        ind++;
        setTimeout(type,200);
    }
};
setTimeout(type,2000);