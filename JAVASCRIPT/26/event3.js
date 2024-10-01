var buttonTag=document.querySelector("button")
function clickedButton(){
    buttonTag.innerHTML="Clicked!!!"
    document.body.style.backgroundColor="red"
}
function notClickedButton(){
    buttonTag.innerHTML="Click Me!!!"
    document.body.style.backgroundColor="green"
}