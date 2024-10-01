var fetchApi=async ()=>{
    let apiVal=await fetch("https://fakestoreapi.com.products");
    let apiData=await apiVal.json();
    console.log(apiData)
    apiData.map((data)=>{
        document.querySelector("table").innerHTML+=`
            <tr>
                <td>${data.id}</td>
                <td>${data.title}</td>
                <td><img src="${data.image}"</td>
                <td>${data.category}</td>
                <td>${data.description}</td>
                <td>${data.price}</td>
            </tr>`
    })
}
fetchApi()

