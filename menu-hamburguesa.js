const Abrir=document.getElementById("Abrir");
const Navegador=document.getElementById("nav");
const Cerrar=document.getElementById("Cerrar");
Abrir.addEventListener("click",()=>{
    Navegador.classList.add("visible")
})
Cerrar.addEventListener("click",()=>{
    Navegador.classList.remove("visible")
})