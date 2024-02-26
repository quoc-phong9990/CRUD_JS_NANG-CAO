const prdname=document.querySelector("#name")
const prdimage=document.querySelector("#image")
const prdprice=document.querySelector("#price")
const addform=document.querySelector("#add-form")
 addform.addEventListener("submit",(event)=>{
 event.preventDefault();
 let newprd={
    "name":prdname.value,
    "image":prdimage.value,
    "price":prdprice.value
 }
 fetch("http://localhost:3000/product",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(newprd)
 })
})
