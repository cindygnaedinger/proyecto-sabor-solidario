// IMPORTACIONES

import http from "./client/http.js"
import varEnt from "./variableEntorno.js"
const apiKey = varEnt.apiKey
console.log(apiKey)

// ApiKey

// BUSCAR ELEMENTOS DEL DOM

//elementos de CONTACTA CON UN DONADOR

let divBuscarDonador = document.getElementById("ingresar-donacion");
let inputBuscarDonador = document.getElementById("input-buscar-donador");
let btnBuscarDonador = document.getElementById("btn-buscar-donar");
let divResultadosDonadores = document.getElementById("resultados-donadores");
let btnBuscarComedor = document.getElementById("btn-buscar-comedor");
let inputBuscarComedor = document.getElementById("input-buscar-comedor");
let carruselDonadores = document.getElementById("donadores-filtrados");
let btnBack = document.getElementById("btn-back-resultado-donador");
let btnNext = document.getElementById("btn-next-resultado-donador");
let divIngresarComedor = document.getElementById("ingresar-comedor");
let divResultadosComedores = document.getElementById("ubicaciones-comedores");
let necesidad = document.getElementById("necesidadComedor");

// FUNCIONES

//Funcion filtrar donadores, esta funcion filtra los donadores que tengan la donacion

function filtrarDonadores(donadores, donacionBuscada) {
  let donadoresFiltrados = [];

  //Un primer forEach para el array de donadores y el segundo para el array de donaciones de cada donador
  donadores.forEach((donador) => {
    const donacionesDelDonador = donador.donaciones;
    donacionesDelDonador.forEach((donacion) => {
      if (donacion === donacionBuscada) {
        donadoresFiltrados.push(donador);
      }
    });
  });
  return donadoresFiltrados;
}

//Funcion para mostrar los donadores filtrados

function mostrarDonadores(donadores, donacionBuscada) {
  const donadoresFiltrados = filtrarDonadores(donadores, donacionBuscada);

  if (donadoresFiltrados != 0) {
    donadoresFiltrados.forEach((donador) => {
      const nuevoDonador = `
            <article class="donador-buscado">
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
                        <button onclick="window.location.href='mailto:${donador.mail}';">CONTACTAR</button>
                    </div>
                </div>
            </article>
        `;

      carruselDonadores.innerHTML += nuevoDonador;
    });
  } else {
    donadores.innerHTML =
      "No se encontró ningun donador que tenga el producto ingresado";
  }
}

//Funcion buscar donadores

const getDonadores = async () => {
  const donadores = await http.get("http://127.0.0.1:8080/api/donadores/");
  return donadores;
};

//EVENTOS

//Manejador de evento para buscar donadores

btnBuscarDonador.addEventListener("click", async () => {
  divBuscarDonador.style.display = "none";
  divResultadosDonadores.style.display = "block";
  const donadores = await getDonadores();
  mostrarDonadores(donadores, inputBuscarDonador.value.toLowerCase());
});

inputBuscarDonador.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && inputBuscarDonador.value !== "") {
    divBuscarDonador.style.display = "none";
    divResultadosDonadores.style.display = "block";
    const donadores = await getDonadores();
    mostrarDonadores(donadores, inputBuscarDonador.value.toLowerCase());
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
  const donadores = document.getElementById("donadores-filtrados");
  donadores.scrollLeft -= 280;
});

btnNext.addEventListener("click", () => {
  const donadores = document.getElementById("donadores-filtrados");
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

/*=============== GSAP ANIMATION ===============*/
gsap.from("#header-logo", 1.5, { opacity: 0, y: -40, delay: 0.2 });
gsap.from("nav", 1.5, { opacity: 0, y: -40, delay: 0.3 });
gsap.from("#hero-banner", 1.5, { opacity: 0, y: -100, delay: 0.4 });

/*=============== FUNCIONES PARA BUSCAR COMEDORES ===============*/

//MAPA DE COMEDORES

//Obtener comedores

const getComedores = async () => {
  const comedores = await http.get("http://127.0.0.1:8080/api/comedores/");
  return comedores;
};

// filtrar comedores segun donacion ingresada

function filtrarComedores(comedores, donacion) {
  let comedoresFiltrados = [];

  //Un primer forEach para el array de comedores y el segundo para el array de necesidades de cada donador

  comedores.forEach((comedor) => {
    const necesidades = comedor.necesidades;
    necesidades.forEach((necesidad) => {
      if (necesidad === donacion) {
        comedoresFiltrados.push(comedor);
      }
    });
  });
  return comedoresFiltrados;
}

//Mostrar comedores

const mostrarComedoresEnMapa = async (donacion, apiKey) => {
  const comedores = await getComedores();
  const comedoresFiltrados = filtrarComedores(comedores, donacion);

  const mapa = new google.maps.Map(document.getElementById("mapa-puntos"), {
    zoom: 12,
    center: { lat: -31.399054703829734, lng: -64.35902632911242 },
  });
  console.log(mapa)

  comedoresFiltrados.forEach(async (comedor) => {
    const direccion = `${comedor.calle} ${comedor.altura}`;
    const coordenadas = await obtenerCoordenadas(direccion, apiKey);

    if (coordenadas) {
      const marker = new google.maps.Marker({
        position: coordenadas,
        map: mapa,
        title: comedor.nombre,
      });
    } else {
      console.log("no hay coordenadas");
    }
  });
};

// Función para obtener coordenadas

const obtenerCoordenadas = async (direccion, apiKey) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${apiKey}`
    );
    const data = await response.json();

    if (data.results.length > 0) {
      const ubicacion = data.results[0].geometry.location;
      return ubicacion;
    } else {
      return null;
    }
  } catch (error) {
    console.log("NO SE PUDO REALIZAR LA PETICION" + error.message);
  }
};

//LLAMADO A LA FUNCION

//por button
btnBuscarComedor.addEventListener("click", async () => {
  divIngresarComedor.style.display = "none";
  divResultadosComedores.style.display = "block";
  await mostrarComedoresEnMapa(inputBuscarComedor.value.toLowerCase(), apiKey);
  necesidad.innerHTML = inputBuscarComedor.value.toUpperCase();
});

//por enter
inputBuscarComedor.addEventListener("keydown", async (event) => {
  if (event.key === "Enter" && inputBuscarComedor.value !== "") {
    divIngresarComedor.style.display = "none";
    divResultadosComedores.style.display = "block";
    await mostrarComedoresEnMapa(inputBuscarComedor.value.toLowerCase(), apiKey);
    necesidad.innerHTML = inputBuscarComedor.value.toUpperCase();
  }
});
