// addEventListener-----Appends an event listener for events whose type attribute value is type. 
// The callback argument sets the callback that will be invoked when the event is dispatched.

var buttons=document.getElementsByTagName("button")
console.log(buttons);
buttons[0].addEventListener("click",function(){
    document.body.style.backgroundColor="orange"
})

buttons[1].addEventListener("mouseover",()=>{
    document.body.style.backgroundColor="blue"
})