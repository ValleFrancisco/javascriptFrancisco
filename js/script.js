const valores12 = { id:"0",duracion: "1 a 12 cuotas inclusive",intereses: "25% mas del valor prestado" };
const valores24 = { id:"1",duracion: "13 a 24 cuotas inclusive",intereses: "50% mas del valor prestado" };
const valores36 = { id:"2",duracion: "25 a 36 cuotas inclusive",intereses: "75% mas del valor prestado" };
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
    localStorage.setItem("valorCta", valorCta);
  }


  function pagar(valorPrestamo) {
    if (cuotas <= 12) {
      sFinal = calculo(valorPrestamo, int12);
    } else if (cuotas <= 24) {
      sFinal = calculo(valorPrestamo, int24);
    } else if (cuotas <= 36) {
      sFinal = calculo(valorPrestamo, int36);
    } else if (cuotas > 36) {
      Swal.fire({
        title: "Cantidad de cuotas superior a lo disponible",
        text: "Ingrese de 1 a 36 cuotas inclusive",
        icon: "info",
        iconColor: "#00ff00",
        position: "top-center",
        timer: 2000,
        showConfirmButton: false
      })
    }
  }

  let cuotas = document.getElementById("cuotas").value;
  let prestamo = document.getElementById("monto").value;

  pagar(prestamo);

  if (cuotas <= 36) {
    let duracion = document.querySelector(".duracion");
    duracion.innerHTML = cuotas;
    let mensual = document.querySelector(".debito");
    mensual.innerHTML = debitar(sFinal, cuotas);
  }
  guardarInfo();
})



const fecha = document.querySelector(".fecha");
fecha.onclick = () => {
  Swal.fire({
    title: "Vencimiento",
    text: "Las cuotas se cobran los dias 5 de cada mes sin importar feriados/fin de semana",
    icon: "info",
    iconColor: "0C188E",
    confirmButtonText: "Gracias!"
  })
}

const termino = document.querySelector(".termino");
termino.onclick = () => {
  Swal.fire({
    title: "Bases y condiciones",
    text: "En el caso que no se pueda realizar el cobro en la fecha pactada, se cobrara un 5% del valor de cuota en forma de penalizacion",
    icon: "error",
    iconColor: "#ff0000",
    position: "top-center",
    confirmButtonText: "Entendido",
  })
}

const planes = document.querySelector
  (".detalle");
planes.addEventListener("click", mostrar);

let cuotas12 = valores12.toString();
let fechas = document.querySelector(".fechas");
let fechas1 = document.querySelector(".fechas1");
let fechas2 = document.querySelector(".fechas2");
  function mostrar() {
    fechas.innerHTML = "De "+ valores12.duracion + "terminas pagando un "+ valores12.intereses;
    fechas1.innerHTML = "De "+ valores24.duracion + "terminas pagando un "+ valores24.intereses;
    fechas2.innerHTML = "De "+ valores36.duracion + "terminas pagando un "+ valores36.intereses;
    /*
    for (const condicion of valores12) {
      fechas.innerHTML = (condicion.id + "Si adquiere un pestamo de " + condicion.duracion + " termina abonando un " + condicion.intereses);
    };
    for (const condicion of valores24) {
      fechas.innerHTML = (condicion.id + "Si adquiere un pestamo de " + condicion.duracion + " termina abonando un " + condicion.intereses);
    };
    for (const condicion of valores36) {
      fechas.innerHTML = (condicion.id + "Si adquiere un pestamo de " + condicion.duracion + " termina abonando un " + condicion.intereses);
    };
  }
  /*for (const condicion of valores) {
    alert("Si adquiere un pestamo de " + condicion.duracion + " termina abonando un " + condicion.intereses)*/
  };


const btnBuscar = document.querySelector("#buscar");
const selectDolar = document.querySelector("#dolar");
const contenedor = document.querySelector("#contenedorValoresDolar");

function filtrarDolar(array) {
  let tipoDolar = selectDolar.value;
  if (!tipoDolar) {
    return Swal.fire({
      title: "Dolar",
      text: "Elige que tipo de dolar queres ver la cotizacion",
      icon: "error",
      iconColor: "#ff0000",
      position: "top-center",
      confirmButtonText: "Okey!",
    });
  } else {
    return array.filter((item) => item.casa.nombre == tipoDolar);
  }
}

function crearHTML(array) {
  contenedor.innerHTML = " ";
  array.forEach((valoresDolar) => {
    const precioDolar = `
          <div id="fondoDolar" class="col">
              <div class="card h-100">
                  <div class="card-body">
                      <h3 class="card-title">${valoresDolar.casa.nombre}</h5>
                      <p class="card-text">Compra: ${valoresDolar.casa.compra}</p>
                      <p class="card-text">Venta: ${valoresDolar.casa.venta}</p>
                      <p class="card-text">Varacion: ${valoresDolar.casa.variacion}</p>
                      <p class="card-text">Numero de agencia: ${valoresDolar.casa.agencia}</p>
                  </div>
              </div>
          </div>`;
    contenedor.innerHTML += precioDolar;
  })
}

/*
fetch("https://walo.in/dolar.php")
  .then((base) => base.json())
  .then((datos) => console.log(datos))*/

btnBuscar.addEventListener('click', () => {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((base) => base.json())
    .then((data) => {
      crearHTML(filtrarDolar(data));
      console.log(data);
    })
})

