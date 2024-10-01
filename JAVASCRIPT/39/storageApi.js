// storage API----local storage, session storage

// -------local storage--------data will be present even after deleting the data
console.log(localStorage);
localStorage.setItem("userName","Rahul");
// setItem()---Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
localStorage.setItem("userEmail","rahul@gmail.com");
// localStorage.removeItem("userName");
// localStorage.clear()
var name=localStorage.getItem("userName")     //fetch the data
document.write(name); 

// -------session storage--------data will be stored only for the specific session
console.log(sessionStorage);
sessionStorage.setItem("userName","Radha");
sessionStorage.setItem("userEmail","radheradhe@gmail.com");
// sessionStorage.removeItem("userName")
// sessionStorage.clear()
var name=sessionStorage.getItem("userName");
console.log(name);
