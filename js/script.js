const valores =[{id:0, duracion: "1 a 12 cuotas inclusive", intereses: "25% mas del valor prestado"},{id:1, duracion: "13 a 24 cuotas inclusive", intereses: "del 50% mas del valor prestado"},{id:2, duracion: "25 a 36 cuotas inclusive", intereses: "del 75% mas del valor prestado"}]
let prestamo =prompt("Ingresa el importe para su credito");
let cuotas =prompt("Ingrese la cuantidad de cuotas que desea abonarlo")

let credito="prestamo";
let duracion="cuotas";
let intereses12 = 1.25;
let intereses24 = 1.5;
let intereses36 = 1.75;
let saldofinal = pagar();
let valorCuota = debitar();


function pagar(){
  if (cuotas<=12){
    let saldofinal = prestamo*intereses12;
    return saldofinal;
}else if(cuotas<=24){
   let saldofinal = prestamo*intereses24;
   return saldofinal;
  }else if(cuotas<=36){
    let saldofinal = prestamo*intereses36;
    return saldofinal;
 }
}
function debitar(){
  let valorCuota = saldofinal/cuotas;
  return valorCuota;
}


alert("Usted termina abonando" + " $" + pagar() + " en"  + " " + cuotas + " " + "cuotas de"+ " $" + debitar())

for (const condicion of valores) {
  alert("Si adquiere un pestamo de "+condicion.duracion+ " termina abonando un "+condicion.intereses)
}



