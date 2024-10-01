// toggle---Returns true if token is now present, and false otherwise.
var count=0;
document.querySelector("input").addEventListener("click",function()
{
    // count++;
    // if(count%2!=0){
    //     console.log(true)
    // }
    // else{
    //     console.log(false)
    // }
    var bool=document.querySelector("input").classList.toggle(true);
    console.log(bool)
})

