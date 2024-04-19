/*
funciones para calcular el area de un rectangulo
*/

  // area = base por altura
function areaRectangulo(base, altura){
    let area = base * altura;
    return area
}



const formArea = document.querySelector(".area")
formArea.addEventListener("submit", (event)=>{
    event.preventDefault();

    const base = parseInt(document.querySelector(".base").value);
    const altura = parseInt(document.querySelector(".altura").value);
    const medidaArea = document.querySelector(".medida_area").value;
    

    const area = areaRectangulo(base, altura);

    alert(`El area del Rectangulo es de ${area}${medidaArea}²`)
});