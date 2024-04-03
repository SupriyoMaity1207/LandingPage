
const nav=document.querySelector(".navbar")
const content=document.querySelector(".container")
window.addEventListener("scroll",()=>{
    if(window.scrollY>nav.offsetHeight){
        content.style.opacity="0.3";

    }
    else{
        content.style.opacity="1";
    }
})