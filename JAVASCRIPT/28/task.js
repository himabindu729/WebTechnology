var num=0
let allInput=document.querySelectorAll("input");
console.log(allInput)

allInput[2].addEventListener("click",()=>{
    if(num>=0 && num<10){
        num++;
        allInput[1].value=num;
    }
})

allInput[0].addEventListener("click",()=>{
    if(num>0 && num<=10){
        num--;
        allInput[1].value=num;
    }
})