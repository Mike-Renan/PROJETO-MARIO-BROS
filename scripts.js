


const form = document.querySelector(".formulario-fale-conosco")  /* querySelector- procura o que eu quero dentro do HTML (document)*/
const mascara = document.querySelector(".mascara-formulario")
const mascara2 = document.querySelector(".mascara-formulario")
function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function esconderForm(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}