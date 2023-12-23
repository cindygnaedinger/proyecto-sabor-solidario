//obtener elementos

let mainDonadores = document.getElementById('main-donadores')
let pestañaDonadores = document.getElementById('pestaña-donadores')


//peticion para comedores

function obtenerDonadores() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "donadores.json");
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        let respuesta = JSON.parse(xhr.response);
        let donadores = respuesta.donadores
        mostrarDonadores(donadores)
      } else {
        window.alert("Hubo un error");
      }
    };
    xhr.send();
  }

  //muestra los comedores

  function mostrarDonadores(donadores){
    donadores.forEach(don => {
        let donador = `<article class="donador">
        <img src="./imgs/imagen-donador.png" alt="">
        <div class="datos-donador">
          <h3>${don.nombre}</h3>
          <h4>Cantidad de donaciones <span>${don.cantidadDonaciones}</span></h4>
          <button>CONTACTAR</button>
        </div>       
      </article>`

      mainDonadores.innerHTML += donador

    })

  }

  

  document.addEventListener('DOMContentLoaded', function() {
    obtenerDonadores();
  });
