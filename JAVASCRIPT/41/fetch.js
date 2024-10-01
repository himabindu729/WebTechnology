var fet=fetch("./data.json");
fet.then(res=>res.json())
 .then(data=>showInfo(data));

let a=function showInfo(data){
    console.log(data);
}
console.log(a);

var fetchData=fetch("https://fakestoreapi.com/products");
fetchData.then(res=>res.json())
.then(data=>showproductinfo(data));
function showproductinfo(data){
    console.log(data);
    data.map(function(data){
       var tab=document.querySelector("table");
       let tabdata=`
       <tr>
           <td>${data.id}</td>
           <td>${data.title}</td>
           <td><img src="${data.image}"</td>
           <td>${data.category}</td>
           <td>${data.description}</td>
           <td>${data.price}</td>
        </tr>`
        tab.innerHTML+=tabdata
    })
}

