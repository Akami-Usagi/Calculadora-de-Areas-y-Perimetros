/*
funciones para calcular el volumen de una piramide
*/

// volumen = lado por lado por lado dividido 3
function volumenPiramide(ancho, largo, alto){
  let volumen = ((ancho * largo * alto) / 3).toFixed(2);
  return volumen;
}


const formArea = document.querySelector(".volumen")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const ancho = parseInt(document.querySelector(".ancho").value);
    const largo = parseInt(document.querySelector(".largo").value);
    const alto = parseInt(document.querySelector(".alto").value);
    
    const medidaArea = document.querySelector(".medida_volumen").value;
    

    const volumen = volumenPiramide(ancho, largo, alto);

    alert(`El Volumen de la Piramide es de ${volumen}${medidaArea}³`)
});