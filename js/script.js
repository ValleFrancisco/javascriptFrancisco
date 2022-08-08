const valores = [{ id: 0, duracion: "1 a 12 cuotas inclusive", intereses: "25% mas del valor prestado" }, { id: 1, duracion: "13 a 24 cuotas inclusive", intereses: "50% mas del valor prestado" }, { id: 2, duracion: "25 a 36 cuotas inclusive", intereses: "75% mas del valor prestado" }]
/*let prestamo =prompt("Ingresa el importe para su credito");
let cuotas =prompt("Ingrese la cuantidad de cuotas que desea abonarlo")*/
let int12 = 1.25;
let int24 = 1.5;
let int36 = 1.75;
var sFinal = 0;
var valorCta = 0;

/*localStorage.setItem("cuotas","0");
localStorage.setItem("prestamo","0");*/

debitar(sFinal, cuotas);
function debitar(a, b) {
  return a / b;
}

function calculo(a, b) {
  return a * b;
}
document.querySelector(".btnSimular").addEventListener("click", () => {
  function guardarInfo() {
    let valorCta = document.getElementsByClassName("debito").value;
    let cuotas = document.getElementById("cuotas").value;
    let prestamo = document.getElementById("monto").value;
    localStorage.setItem("cuotas", cuotas);
    localStorage.setItem("prestamo", prestamo);
    localStorage.setItem("valorCta",valorCta);
  }


  function pagar(valorPrestamo) {
    if (cuotas <= 12) {
      sFinal = calculo(valorPrestamo, int12);
    } else if (cuotas <= 24) {
      sFinal = calculo(valorPrestamo, int24);
    } else if (cuotas <= 36) {
      sFinal = calculo(valorPrestamo, int36);
    } else if (cuotas > 36) {
      alert("Cantidad de cuotas superior a lo disponible")
    }
  }

  let cuotas = document.getElementById("cuotas").value;
  let prestamo = document.getElementById("monto").value;

  pagar(prestamo);
  
  if (cuotas <=36){
  let duracion = document.querySelector(".duracion");
  duracion.innerHTML = cuotas;
  let mensual = document.querySelector(".debito");
  mensual.innerHTML = debitar(sFinal, cuotas);
}
  guardarInfo();
})



const fecha = document.querySelector(".fecha");
fecha.onclick = () => {
  alert("Las cuotas se cobran los dias 5 de cada mes sin importar feriados/fin de semana");
}

const termino = document.querySelector(".termino");
termino.onclick = () => {
  alert("En el caso que no se pueda realizar el cobro en la fecha pactada, se cobrara un 5% del valor de cuota en forma de penalizacion");
}
const planes = document.querySelector
  (".detalle");
planes.addEventListener("click", mostrar);

function mostrar() {
  for (const condicion of valores) {
    alert("Si adquiere un pestamo de " + condicion.duracion + " termina abonando un " + condicion.intereses);
  }
}








