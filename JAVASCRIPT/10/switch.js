var place=prompt("Enter the Place Name");
place=place.toLowerCase();
switch(place){
    case "Charminar":document.getElementById("container").innerHTML=`<img src="../../ASSESTS/IMAGES/charminar1.jpeg" >`
    break;

    case "golconda":document.getElementById("container").innerHTML=`<img src="../../ASSESTS/IMAGES/golconda.jpeg" >`
    break;

    case "zoo":document.getElementById("container").innerHTML=` <img src="../../ASSESTS/IMAGES/zoo.jpeg" >`
    break;

    case "birlamandir":document.getElementById("container").innerHTML=`<img src="../../ASSESTS/IMAGES/birlamandir.jpeg" >`
    break;

    case "tankbund":document.getElementById("container").innerHTML=`<img src="../../ASSESTS/IMAGES/tankbund.jpeg" >`
    break;

    default:document.getElementById("container").innerHTML=`Plz. Enter valid Input`

}