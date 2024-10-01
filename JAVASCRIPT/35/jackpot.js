function fun(){
    var num2=Math.trunc(Math.random()*10); 
    var num1=Math.trunc(Math.random()*10); 
    var num3=Math.trunc(Math.random()*10); 
    var num4=Math.trunc(Math.random()*10); 
    var allInp=document.querySelectorAll(".numInp")
    allInp[0].value=num1;
    allInp[1].value=num2;
    allInp[2].value=num3;
    allInp[3].value=num4;
    if(num1==num2 && num2==num3 && num3==num4){
        document.querySelector("#congrats").style.display="block"
    }
}
function closeEindow(){
    document.querySelector("#congrats").style.display="none"
}