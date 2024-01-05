import http from './client/http.js'


//obtener elementos

let mainDonadores = document.getElementById('main-donadores')


//peticion para donadores


const getDonadores = async () => {

  const donadores = await http.get('http://127.0.0.1:8080/api/donadores/');
    donadores.forEach(donador => {
      mostrarDonador(donador)
        
    });
};


  //muestra los comedores

  function mostrarDonador(donador){

        let donadorHTML = `<article class="donador">
        <img src="./imgs/imagen-donador.png" alt="">
        <div class="datos-donador">
          <h3>${donador.nombre}</h3>
          <h4>Cantidad de donaciones <span>${donador.cantidadDonaciones}</span></h4>
          <button>CONTACTAR</button>
        </div>       
      </article>`

      mainDonadores.innerHTML += donadorHTML

  }

  

  document.addEventListener('DOMContentLoaded', async () => {
    await getDonadores();
  });
