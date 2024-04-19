/*
funciones para calcular el volumen de un cuboide
*/

// volumen = lado por lado por lado
function volumenCuboide(ancho, largo, alto){
  let volumen = ancho * largo * alto;
  return volumen;
}


const formArea = document.querySelector(".volumen")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const ancho = parseInt(document.querySelector(".ancho").value);
    const largo = parseInt(document.querySelector(".largo").value);
    const alto = parseInt(document.querySelector(".alto").value);
    
    const medidaArea = document.querySelector(".medida_volumen").value;
    

    const volumen = volumenCuboide(ancho, largo, alto);

    alert(`El Volumen del Cuboide es de ${volumen}${medidaArea}³`)
});