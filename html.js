const app=document.getElementById("app")
 const api=()=>{
    fetch("http://localhost:3000/product")
    .then((response)=> response.json())
.then((data)=>{
    const html=data.map((item,index)=>{
        return`
     
        <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>   <img src="${item.image}" alt=""></td>
        <td>${item.price}</td>   

        <td>x
        <button><a href="update.html?id=${item.id}">update</a></button> 
         <button class="btn-delete" data-id="${item.id}">xoa</button>
         </td>
                
        </tr>
        `
    })
    .join(" ")
    app.innerHTML=html;
})
.then(()=>{
  const btndelete=document.querySelectorAll(".btn-delete")
    for(let btn of btndelete){
        btn.addEventListener("click",()=>{
            let id=btn.dataset.id
            fetch("http://localhost:3000/product/"+id,{
                method:"DELETE"
            })
        })
    }
})
    
 }
 api()