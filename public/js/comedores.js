import http from './client/http.js'

//obtener elementos

let mainComedores = document.getElementById('main-comedores')


 //Obtener comedores

 const getComedores = async () => {

  const comedores = await http.get('http://127.0.0.1:8080/api/comedores/');
  return comedores;
};


//muestra todos los comedores

  function mostrarComedores(comedores){

    comedores.forEach(comedor => {

      let comedorHTML = `<article class="comedor">
      <img src="./imgs/Imagen-Comedor.png" alt="">
      <div class="datos-comedor">
        <h3>${comedor.nombre}</h3>
        <h4>${comedor.calle} ${comedor.altura}</h4>
        <button>CONTACTAR</button>
      </div>  
      <div class="urgencia">
        <h4>Nivel de urgencia: </h4>
        <h5>${comedor.urgencia}</h5>
      </div>        
    </article>`
  
    mainComedores.innerHTML += comedorHTML
      
    });
  };

document.addEventListener('DOMContentLoaded', async () =>{
  const comedores = await getComedores()
  mostrarComedores(comedores)

})