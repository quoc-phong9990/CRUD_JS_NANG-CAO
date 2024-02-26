const searchParam= new URLSearchParams(document.location.search)
const id=searchParam.get("id")
 const prdname=document.querySelector("#name")
 const prdimage=document.querySelector("#image")
 const prdprice=document.querySelector("#price")
 const prdupdate=document.querySelector("#update-form")



 fetch("http://localhost:3000/product/"+id)
 .then((response)=>{return response.json()
 })
    .then((data)=>{
     prdname.value=data.name
     prdimage.value=data.image
     prdprice.value=data.price;
    })
prdupdate.addEventListener("submit",(event)=>{
    event.preventDefault();
     let newupdate={
        name:prdupdate.value,

        image:prdimage.value,
        price:prdprice.value
     }
 fetch("http://localhost:3000/product/"+id,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(newupdate)
 })
 .then(()=>{
    window.location.href="html.html";
 })
})

