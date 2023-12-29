import http from '../client/http.js'


//obtener elementos

let mainComedores = document.getElementById('main-comedores')
let pestañaComedores = document.getElementById('pestaña-comedores')

 //Obtener comedores

 const getComedores = async () => {
  const comedores = await http.get('http://127.0.0.1:8080/api/products/');
  comedores.forEach(comedores => {
      console.log(comedores);
      mostrarComedores(comedores);
  });
};

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
