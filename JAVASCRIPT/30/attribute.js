// setAttribute function(attribute,value)---Sets the value of element's first attribute whose qualified name is qualifiedName to value.
// removeAttribute function(attribute)---Removes element's first attribute whose qualified name is qualifiedName.
var form=document.forms;
console.log(form)
form[0].elements[0].setAttribute("type","email");
form[0].elements[0].setAttribute("placeholder","Enter your Email");
form[0].elements[1].setAttribute("type","password");
form[0].elements[1].setAttribute("placeholder","Enter the Pasword");
form[0].elements[2].setAttribute("type","submit");
form[0].setAttribute("action","https://www.tesla.com");
form[0].elements[2].setAttribute("disabled","true");

function formPass(){
    var formValue=form[0].elements[1].value;
    var formValLen=formValue.length;
    if(formValLen>=5){
        form[0].elements[2].removeAttribute("disabled");
    }
    else{
        form[0].elements[2].setAttribute("disabled","true");
    }
}
