var audioObj=new Audio();
audioObj.src="c:\Users\kodal\Downloads\VANDEMATARAM  Instrumental  Indian National Song.mp3"
function flagHoisting(){
    audioObj.play();
    var flag=document.querySelector("#flag");
    flag.style.width="18vw";
    flag.style.height="10vw";
    flag.style.filter="blur(0px)"
    flag.style.borderRadius="0px"
    flag.style.transform="translate(0px,-160%)"
    document.querySelector("#orange").style.rotate="0deg"
    document.querySelector("#white").style.rotate="0deg"
    document.querySelector("#green").style.rotate="0deg"
    document.querySelector("#white").style.rotate="url(../../ASSESTS/IMAGES/ashokachakram.png)"
}