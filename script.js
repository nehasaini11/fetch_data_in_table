fetch("https://dummyjson.com/products").then((data)=>{
   // console.log(data)  json format
    return data.json();  // converted to object
}).then((objectData)=>{
    // console.log(objectData.products[0].title);
    let tableData ="";
    objectData.products.map((values)=>{
        tableData+= ` <tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.images[0]}"/></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})