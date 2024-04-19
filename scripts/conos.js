/*
funciones para calcular el volumen de un cono
*/

  // Volumen = (π x Radio2) x Altura / 3
  function volumenCilindro(radio, altura){
    let volumen = (((Math.PI * (radio ** 2)) * altura) / 3).toFixed(2)
    return volumen;
  }


const formArea = document.querySelector(".volumen")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const radio = parseInt(document.querySelector(".radio").value);
    const altura = parseInt(document.querySelector(".altura").value);
    
    const medidaArea = document.querySelector(".medida_volumen").value;
    

    const volumen = volumenCilindro(radio, altura);

    alert(`El Volumen del Cono es de ${volumen}${medidaArea}³`)
});