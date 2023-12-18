//obtener elementos

let mainComedores = document.getElementById('main-comedores')
let pestañaComedores = document.getElementById('pestaña-comedores')


//peticion para comedores

function obtenerComedores() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "comedores.json");
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        let respuesta = JSON.parse(xhr.response);
        let comedores = respuesta.comedores
        mostrarComedores(comedores)
      } else {
        window.alert("Hubo un error");
      }
    };
    xhr.send();
  }

  //muestra los comedores

  function mostrarComedores(comedores){
    comedores.forEach(com => {
        let comedor = `<article class="comedor">
        <img src="./imgs/Imagen-Comedor.png" alt="">
        <div class="datos-comedor">
          <h3>${com.nombre}</h3>
          <h4>${com.calle} ${com.altura}</h4>
          <button>CONTACTAR</button>
        </div>  
        <div class="urgencia">
          <h4>Nivel de urgencia: </h4>
          <h5>${com.urgencia}</h5>
        </div>        
      </article>`

      mainComedores.innerHTML += comedor

    })

  }

  

  document.addEventListener('DOMContentLoaded', function() {
    obtenerComedores();
  });
