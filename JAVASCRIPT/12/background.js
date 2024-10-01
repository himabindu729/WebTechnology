var num=prompt("Enter number between 0 to 6");
num=Number(num);
switch(num){
    case 0:
        document.getElementById("day").innerHTML="Sunday"
        document.getElementById("background").innerHTML=`<div id="background1"></div>`
        break;
    case 1:
        document.getElementById("day").innerHTML="Monday"
        document.getElementById("background").innerHTML=`<div id="background2"></div>`
        break;
    case 2:
        document.getElementById("day").innerHTML="Tuesday"
        document.getElementById("background").innerHTML=`<div id="background3"></div>`
        break;
    case 3:
        document.getElementById("day").innerHTML="Wednesday"
        document.getElementById("background").innerHTML=`<div id="background4"></div>`
        break;
    case 4:
        document.getElementById("day").innerHTML="Thursday"
        document.getElementById("background").innerHTML=`<div id="background5"></div>`
        break;
    case 5:
        document.getElementById("day").innerHTML="Friday"
        document.getElementById("background").innerHTML=`<div id="background6"></div>`
        break;
    case 6:
        document.getElementById("day").innerHTML="Saturday"
        document.getElementById("background").innerHTML=`<div id="background7"></div>`
        break;
    default:
        document.getElementById("day").innerHTML="Please enter valid input!!!"
        document.getElementById("background").innerHTML=`<div id="background8"></div>`
}
