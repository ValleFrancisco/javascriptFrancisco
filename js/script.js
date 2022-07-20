const valores =[{id:0, duracion: "1 a 12 cuotas inclusive", intereses: "25% mas del valor prestado"},{id:1, duracion: "13 a 24 cuotas inclusive", intereses: "50% mas del valor prestado"},{id:2, duracion: "25 a 36 cuotas inclusive", intereses: "75% mas del valor prestado"}]
let prestamo =prompt("Ingresa el importe para su credito");
let cuotas =prompt("Ingrese la cuantidad de cuotas que desea abonarlo")

let credito="prestamo";
let duracion="cuotas";
let int12 = 1.25;
let int24 = 1.5;
let int36 = 1.75;
let sFinal = 0;
let valorCta = 0;

function calculo(a,b){
  return a*b;
}

function pagar(){
  if (cuotas<=12){
    sFinal = calculo(prestamo,int12);
    return sFinal;
    } else if(cuotas<=24){
    sFinal = calculo(prestamo,int24);
    return sFinal;
    } else if(cuotas<=36){
    sFinal = calculo(prestamo,int36);
    return sFinal;
 }
}
function debitar(a,b){
  return a/b;
}


alert("Usted termina abonando" + " $" + pagar() + " en " + cuotas + " cuotas de"+ " $" + debitar(sFinal,cuotas))

for (const condicion of valores) {
  alert("Si adquiere un pestamo de "+condicion.duracion+ " termina abonando un "+condicion.intereses)
}



