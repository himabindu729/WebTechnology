function pwVisible(){
    document.querySelector("#inp").type="text"
    document.querySelector("#eye").src=="../../ASSESTS/IMAGES/mon3emoji-removebg-preview.png"
    document.querySelector("#eye").style.transform="rotateY(180deg)"
}

function pwHidden(){
    document.querySelector("#inp").type="password"
    document.querySelector("#eye").src="../../ASSESTS/IMAGES/mon1emoji-removebg-preview.png"
    document.querySelector("#eye").style.transform="rotateY(0deg)"
}

function checkPasswordLen(){
    var pw=document.getElementById("inp").value;
    var pwLen=pw.length;
    if(pwLen==0){
        document.getElementById("status").innerHTML=""
    }
    else if(pwLen>=1 && pwLen<=7){
        document.getElementById("status").innerHTML="Weak Password"
        document.getElementById("status").style.color="red"
    }
    else if(pwLen>=8 && pwLen<=14){
        document.getElementById("status").innerHTML="Good Password"
        document.getElementById("status").style.color="orange"
    }
    else{
        document.getElementById("status").innerHTML="Strong Password"
        document.getElementById("status").innerHTML="Green"
    }
}