// volumen = lado por lado por lado
function volumenCubo(lado){
    let volumen = lado ** 3;
    return volumen;
}
// volumen = lado por lado por lado
function volumenCuboide(ancho, largo, alto){
    let volumen = ancho * largo * alto;
    return volumen;
}
// volumen = lado por lado por lado dividido 3
function volumenPiramide(ancho, largo, alto){
    let volumen = ((ancho * largo * alto) / 3).toFixed(2);
    return volumen;
}
// volumen = 4/3 x π x Rario3
function volumenEsfera(radio){
    let volumen = ((4/3) * (Math.PI * (radio ** 3))).toFixed(2);
    return volumen;
}
// Volumen = (π x Radio2) x Altura.
function volumenCilindro(radio, altura){
    let volumen = ((Math.PI * (radio ** 2)) * altura).toFixed(2)
    return volumen;
}
// Volumen = (π x Radio2) x Altura / 3
function volumenCilindro(radio, altura){
    let volumen = (((Math.PI * (radio ** 2)) * altura) / 3).toFixed(2)
    return volumen;
}
