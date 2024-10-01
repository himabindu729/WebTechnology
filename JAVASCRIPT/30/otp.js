var otp=''
function openOTP(){
    document.getElementById("container2").style.display=otp
    var num1=Math.trunc(Math.random()*10);
    var num2=Math.trunc(Math.random()*10);
    var num3=Math.trunc(Math.random()*10);
    var num4=Math.trunc(Math.random()*10);
    otp=""+num1+num2+num3+num4;
    document.getElementById("otp").innerHTML=otp
}

function closeOTP(){
    document.getElementById("container2").style.display="none"
}

function checkOTP(){
    var uOTP=document.querySelector("userOTP").value;
    if(uOTP==otp && uOTP.length!==0){
        location.href="https://www.tesla.com"
    }
    else{
        document.querySelector("#status").innerHTML="Enter the proper OTP";
        document.querySelector("#status").style.color="red"
    }
}