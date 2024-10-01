var key1=prompt("enter key one")
var key2=prompt("enter key two")

var fetchData=fetch(`https://pixabay.com/api/?key=45527450-45ae18b3fe841e89c31f76db6&q=yellow+flowers=${key1}+${key2}&image_type=photo`);

fetchdata.then(res=>res.json())
.then(data=>showProductInfo(data));
function showProductInfo(data){
    console.log(data);
    console.log(data.hits);
    data.hits.map(function(data){
        var tab=document.querySelector("#container");
        let tabData=`
                <img src="${data.largeImageURL}">
        `
        tab.innerHTML+=tabData;
    })
}