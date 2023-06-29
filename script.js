let show = document.getElementById("open")
let navegacion = document.getElementById("menu");
let hiden = document.getElementById("close");

show.addEventListener("click", ()=>{
    navegacion.classList.add("activar");
})

hiden.addEventListener("click", ()=>{
    navegacion.classList.remove("activar")
})