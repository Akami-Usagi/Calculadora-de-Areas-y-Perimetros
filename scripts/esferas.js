/*
funciones para calcular el volumen de una esfera
*/

  // volumen = 4/3 x π x Rario3
  function volumenEsfera(radio){
    let volumen = ((4/3) * (Math.PI * (radio ** 3))).toFixed(2);
    return volumen;
  }


const formArea = document.querySelector(".volumen")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const radio = parseInt(document.querySelector(".radio").value);
    
    const medidaArea = document.querySelector(".medida_volumen").value;
    

    const volumen = volumenEsfera(radio);

    alert(`El Volumen de la Esfera es de ${volumen}${medidaArea}³`)
});