/*
funciones para calcular el area de un cuadrado
*/

  // area = lado por lado
  function areaCuadrado(lado){
    let area = lado ** 2;
    return area
  }


const formArea = document.querySelector(".area")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const base = parseInt(document.querySelector(".base").value);
    
    const medidaArea = document.querySelector(".medida_area").value;
    

    const area = areaCuadrado(base);

    alert(`El area del Cuadrado es de ${area}${medidaArea}²`)
});