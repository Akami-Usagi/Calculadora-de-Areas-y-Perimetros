/*
funciones para calcular el volumen de un cilindro
*/

// Volumen = (π x Radio2) x Altura.
function volumenCilindro(radio, altura){
  let volumen = ((Math.PI * (radio ** 2)) * altura).toFixed(2)
  return volumen;
}


const formArea = document.querySelector(".volumen")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const radio = parseInt(document.querySelector(".radio").value);
    const altura = parseInt(document.querySelector(".altura").value);
    
    const medidaArea = document.querySelector(".medida_volumen").value;
    

    const volumen = volumenCilindro(radio, altura);

    alert(`El Volumen del Cilindro es de ${volumen}${medidaArea}³`)
});