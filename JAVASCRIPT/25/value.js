// function userValue(){
//     var userName=document.getElementById("nameValue").value;
//     console.log(userName);
//     document.getElementById("name").innerHTML=userName;
// }

// function userColor(){
//     var userCname=document.getElementById("color").value;
//     console.log(userCname);
//     document.body.style.backgroundColor=userCname;
// }

function colorChange(){
    var allinput=document.forms;
    console.log(allinput);
    var rr=allinput[0].elements[0].value;
    var gg=allinput[0].elements[1].value;
    var bb=allinput[0].elements[2].value;
    var alpha=allinput[0].elements[3].value;
    alpha=alpha/100;
    document.body.style.backgroundColor=`rgb(${rr},${gg},${bb},${alpha})`
}