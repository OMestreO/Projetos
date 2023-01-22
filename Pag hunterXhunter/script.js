const mostra = document.getElementById("btn");
const modal = document.querySelector(".modal")
const video = document.getElementById("video")

mostra.addEventListener("click", ()=>{
    
    video.setAttribute("src","https://www.youtube.com/embed/d6kBeJjTGnY")
    modal.style.opacity = "1";
    modal.style.visibility =  "visible";
})

const esconder = document.getElementById("btn2")

esconder.addEventListener("click",()=>{
    
    video.setAttribute("src", "")
    modal.style.opacity = "0";
    modal.style.visibility =  "hidden";
})