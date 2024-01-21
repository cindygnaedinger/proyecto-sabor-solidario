import config from '../../config.js';
import http from './client/http.js';

//obtener elementos

let mainDonadores = document.getElementById('main-donadores');

//peticion para donadores

const getDonadores = async () => {
  const donadores = await http.get(`${config.BASE_URL}/api/donadores`);
  return donadores;
};

//muestra todos los donadores

function mostrarDonadores(donadores) {
  donadores.forEach((donador) => {
    let donadorHTML = `<article class="donador">
      <img src="./imgs/imagen-donador.png" alt="">
      <div class="datos-donador">
        <h3>${donador.nombre}</h3>
        <h4 style='margin-top: 8px'>Cantidad de donaciones <span>${donador.cantidadDonaciones}</span></h4>
        <h4 style='color:#1e1e1e'>Tengo para donar: ${donador.donaciones}</h4>
        <button id='contactar-donador'onclick="window.location.href='mailto:${donador.mail}';">CONTACTAR</button>
      </div>       
    </article>`;

    mainDonadores.innerHTML += donadorHTML;
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const donadores = await getDonadores();
  mostrarDonadores(donadores);
});
