 var bTag=document.querySelector("input")
bTag.addEventListener("click",function()
{
var bool=bTag.classList.toggle(true)
if(bool==true){
    bTag.style.backgroundColor="gray"
    bTag.value="Subscribed"
}
else{
    bTag.style.backgroundColor="red"
    bTag.value="subscribe"
}
})
