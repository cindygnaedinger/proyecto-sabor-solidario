// BUSCAR ELEMENTOS DEL DOM

//elementos de CONTACTA CON UN DONADOR

let divBuscarDonador = document.getElementById("ingresar-donacion");
let inputBuscarDonador = document.getElementById("input-buscar-donador");
let btnBuscarDonador = document.getElementById("btn-buscar-donar");
let divResultadosDonadores = document.getElementById("resultados-donadores");
let btnBuscarComedor = document.getElementById("btn-buscar-comedor");
let inputBuscarComedor = document.getElementById("input-buscar-comedor");
let articleDonador = document.getElementById("article-donador");
let btnBack = document.getElementById("btn-back-resultado-donador");
let btnNext = document.getElementById("btn-next-resultado-donador");

// FUNCIONES

//Funcion filtrar donadores, esta funcion filtra los donadores que tengan la donacion

function filtrarDonadores(donadores, donacionBuscada) {
  let donadoresFiltrados = [];

  //Un primer forEach para el array de donadores y el segundo para el array de donaciones de cada donador
  donadores.forEach((donador) => {
    donacionesDelDonador = donador.donaciones;
    donacionesDelDonador.forEach((donacion) => {
      if (donacion === donacionBuscada) {
        donadoresFiltrados.push(donador);
      }
    });
  });
  return donadoresFiltrados;
}

//Funcion para mostrar los donadores filtrados

function mostrarDonadores(donadoresFiltrados) {
  donadores.innerHTML = "";

  if (donadoresFiltrados != 0) {
    donadoresFiltrados.forEach((donador) => {
      const nuevoDonador = `
            <article class="donador">
                <div id="parte-superior">
                    <h3>${donador.nombre}</h3>
                    <p><span>Tengo para donar:</span>
                       ${donador.donaciones}            
                    </p>
                </div>
                <div id="parte-inferior">
                    <img src="imgs/phone.png" alt="Icono teléfono">
                    <h3>${donador.telefono}</h3>
                    <img src="imgs/mail.png" alt="Icono mail">
                    <h3>${donador.mail}</h3>
                    <div id="boton-contenedor">
                        <button>CONTACTAR</button>
                    </div>
                </div>
            </article>
        `;

      donadores.innerHTML += nuevoDonador;
    });
  } else {
  }
}

//Funcion buscar donadores, esta funcion hace la peticion a la 'base de datos' y luego llama internamente
// a otras funciones para el filtrado y la muestra de los donadores

function buscarDonadores(donacionBuscada) {
  xhr = new XMLHttpRequest();
  xhr.open("get", "donadores.json");

  xhr.onload = () => {
    if (xhr.status === 200) {
      let donadores = JSON.parse(xhr.responseText);
      let donadoresFiltrados = filtrarDonadores(donadores, donacionBuscada);
      mostrarDonadores(donadoresFiltrados);
    } else {
      divBuscarDonador.style.display = "block";
      divResultadosDonadores.style.display = "none";
      window.alert("Hubo un error");
    }
  };
  xhr.send();
}

//EVENTOS

//Manejador de evento para buscar donadores

btnBuscarDonador.addEventListener("click", () => {
  divBuscarDonador.style.display = "none";
  divResultadosDonadores.style.display = "block";
  buscarDonadores(inputBuscarDonador.value.toLowerCase());
});

inputBuscarDonador.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && inputBuscarDonador.value !== "") {
    divBuscarDonador.style.display = "none";
    divResultadosDonadores.style.display = "block";
    buscarDonadores(inputBuscarDonador.value.toLowerCase());
  }
});

inputBuscarDonador.addEventListener("input", () => {
  let imgLupaDonador = document.getElementById("img-buscar-donador");

  if (inputBuscarDonador.value) {
    btnBuscarDonador.disabled = false;
    imgLupaDonador.style.cursor = "pointer";
    imgLupaDonador.style.transition = "opacity 0.4s";
    imgLupaDonador.style.opacity = "1";
  } else {
    btnBuscarDonador.disabled = true;
    imgLupaDonador.style.cursor = "default";
    imgLupaDonador.style.transition = "opacity 0.6s";
    imgLupaDonador.style.opacity = "0.3";
  }
});

btnBack.addEventListener("click", () => {
  donadores.scrollLeft -= 280;
});

btnNext.addEventListener("click", () => {
  donadores.scrollLeft += 280;
});

//Manejador de eventos para buscar comedores

inputBuscarComedor.addEventListener("input", () => {
  let imgLupaComedor = document.getElementById("img-buscar-comedor");

  if (inputBuscarComedor.value) {
    btnBuscarComedor.disabled = false;
    imgLupaComedor.style.cursor = "pointer";
    imgLupaComedor.style.transition = "opacity 0.3s";
    imgLupaComedor.style.opacity = "1";
  } else {
    btnBuscarComedor.disabled = true;
    imgLupaComedor.style.cursor = "default";
    imgLupaComedor.style.transition = "opacity 0.3s";
    imgLupaComedor.style.opacity = "0.3";
  }
});

// pruebas modal
const abrirModal = document.getElementById("abrir-modal");
const modalDonar = document.getElementById("modal-donar");
const modalUnirse = document.getElementById("modal-unirse");
/**
 * modal--show -> clase que hace que el modal se muestre. (le agrega opacidad: 1)
 */

function abrirModalUnirse() {
  modalDonar.classList.add("modal--show");
}

function abrirFormUnirse() {
  modalDonar.classList.remove("modal--show");
  modalUnirse.classList.add("modal--show");
}

function cerrarModalRegistro() {
  modalUnirse.classList.remove("modal--show");
}

const botonCerrar = document.getElementById("cerrar-modal-donar");
botonCerrar.addEventListener("click", () => {
  modalDonar.classList.remove("modal--show");
});

const botonRegistro = document.getElementById("boton-registrarse");
botonRegistro.addEventListener("click", () => {
  modalDonar.classList.remove("modal--show");
});

const botonIngresar = document.getElementById("abrir-modal-ingresar");
const modalIngresar = document.getElementById("modal-ingresar");

botonIngresar.addEventListener("click", () => {
  modalIngresar.classList.add("modal--show");
});

const botonCruz = document.getElementById("boton--cruz");
botonCruz.addEventListener("click", () => {
  modalIngresar.classList.remove("modal--show");
});

/*=============== GSAP ANIMATION ===============*/
gsap.from("#header-logo", 1.5, { opacity: 0, y: -40, delay: 0.2 });
gsap.from("nav", 1.5, { opacity: 0, y: -40, delay: 0.3 });
gsap.from("#hero-banner", 1.5, { opacity: 0, y: -100, delay: 0.4 });
