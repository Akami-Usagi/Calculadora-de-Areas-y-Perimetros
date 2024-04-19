/*
funciones para calcular el area de un triangulo
*/

  // area = base por altura dividido 2
  function areaTriangulo(b, h){
    let area = (b * h) / 2;
    return area
  }



const formArea = document.querySelector(".area")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const base = parseInt(document.querySelector(".base").value);
    const altura = parseInt(document.querySelector(".altura").value);
    const medidaArea = document.querySelector(".medida_area").value;
    

    const area = areaTriangulo(base, altura);

    alert(`El area del Triangulo es de ${area}${medidaArea}²`)
});