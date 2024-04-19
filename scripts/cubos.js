/*
funciones para calcular el volumen de un cubo
*/

  // volumen = lado por lado por lado
  function volumenCubo(lado){
    let volumen = lado ** 3;
    return volumen;
  }


const formArea = document.querySelector(".volumen")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const base = parseInt(document.querySelector(".base").value);
    
    const medidaArea = document.querySelector(".medida_volumen").value;
    

    const volumen = volumenCubo(base);

    alert(`El Volumen del Cubo es de ${volumen}${medidaArea}³`)
});