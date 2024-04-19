/*
funciones para calcular el area de una circunferencia
*/

// area = Pi por radio al cuadrado
function areaCirculo(radio){
  let area = (Math.PI * (radio ** 2)).toFixed(2); // toFixed = redondea a 2 decimales
  return area
}


const formArea = document.querySelector(".area")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const radioArea = parseInt(document.querySelector(".radio_area").value);
    
    const medidaArea = document.querySelector(".medida_area").value;
    

    const area = areaCirculo(radioArea);

    alert(`El area del Circulo es de ${area}${medidaArea}²`)
});