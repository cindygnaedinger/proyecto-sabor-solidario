const abrirModal = document.getElementById("abrir-modal");
const modalDonar = document.getElementById("modal-donar");
const modalUnirse = document.getElementById("modal-unirse");
const modalRecibir = document.getElementById("modal-recibir");

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

function abrirFormRecibir() {
  modalDonar.classList.remove("modal--show");
  modalRecibir.classList.add("modal--show");
}

function cerrarModalRecibir() {
  modalRecibir.classList.remove("modal--show");
}

function cerrarModalIngresar() {
  modalIngresar.classList.remove("modal--show");
}

function cerrarModalDonar() {
  modalDonar.classList.remove("modal--show");
}

const botonCruz = document.getElementById("boton--cruz");
botonCruz.addEventListener("click", () => {
  modalIngresar.classList.remove("modal--show");
  modalRecibir.classList.remove("modal--show");
  modalDonar.classList.remove("modal--show");
});
