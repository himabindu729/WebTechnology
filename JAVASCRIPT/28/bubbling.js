// When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

function grandParentDiv(){
    window.alert("This is Grand Parent Div")
    event.stopPropagation();
}

function parentDiv(){
    window.alert("This is Parent Div")
    event.stopPropagation();
}

function childDiv(){
    window.alert("This is Child Div")
    event.stopImmediatePropagation();
}