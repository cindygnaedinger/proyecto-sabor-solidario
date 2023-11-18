// BUSCAR ELEMENTOS DEL DOM

//elementos de CONTACTA CON UN DONADOR

let divBuscarDonador = document.getElementById("ingresar-donacion")
let inputBuscarDonador = document.getElementById("input-buscar-donador")
let btnBuscarDonador = document.getElementById("btn-buscar-donar")
let divResultadosDonadores = document.getElementById("resultados-donadores")
let btnBuscarComedor = document.getElementById("btn-buscar-comedor")
let inputBuscarComedor = document.getElementById("input-buscar-comedor")

// FUNCIONES

//Funcion filtrar donadores, esta funcion filtra los donadores que tengan la donacion

function filtrarDonadores(donadores, donacionBuscada){
    let donadoresFiltrados = []

    //Un primer forEach para el array de donadores y el segundo para el array de donaciones de cada donador
    donadores.forEach(donador => {
        donacionesDelDonador = donador.donaciones
        donacionesDelDonador.forEach(donacion => {
            if(donacion === donacionBuscada){
                donadoresFiltrados.push(donador)
            }
        })               
    });
    return donadoresFiltrados
   
}


//Funcion para mostrar los donadores filtrados

function mostrarDonadores(donadoresFiltrados){
    if(donadoresFiltrados != 0){
        donadoresFiltrados.forEach(donador => {
            const nuevoDonadorArt = document.createElement('article')
            nuevoDonadorArt.textContent = `${donador.nombre} ---> ${donador.donaciones.join(", ")} `
            divResultadosDonadores.appendChild(nuevoDonadorArt)
        })

    }else{
        const noExistenDonadores = document.createElement('h2')
        noExistenDonadores.textContent = `No se encontraron donadores que tengan "${inputBuscarDonador.value}."`
        divResultadosDonadores.appendChild(noExistenDonadores)
    }

}

//Funcion buscar donadores, esta funcion hace la peticion a la 'base de datos' y luego llama internamente
// a otras funciones para el filtrado y la muestra de los donadores

function buscarDonadores(donacionBuscada){
    xhr = new XMLHttpRequest();
    xhr.open('get', 'donadores.json')

    xhr.onload = () =>{
        if(xhr.status === 200){
            let donadores = JSON.parse(xhr.responseText)
            let donadoresFiltrados = filtrarDonadores(donadores, donacionBuscada)
            mostrarDonadores(donadoresFiltrados)

        } else{
            divBuscarDonador.style.display = 'block'
            divResultadosDonadores.style.display = 'none'
            window.alert('Hubo un error')
        }
    
    } 
    xhr.send()
    
}

//EVENTOS

//Manejador de evento para buscar donadores

btnBuscarDonador.addEventListener('click', () => {
    divBuscarDonador.style.display = 'none'
    divResultadosDonadores.style.display = 'block'
    buscarDonadores(inputBuscarDonador.value.toLowerCase())
   

})

inputBuscarDonador.addEventListener('input', () => {

    let imgLupaDonador = document.getElementById('img-buscar-donador')

    if (inputBuscarDonador.value) {
        btnBuscarDonador.disabled = false; 
        imgLupaDonador.style.cursor = 'pointer';
        imgLupaDonador.style.transition = 'opacity 0.4s'
        imgLupaDonador.style.opacity = '1'
    } else {
        btnBuscarDonador.disabled = true; 
        imgLupaDonador.style.cursor = 'default';
        imgLupaDonador.style.transition = 'opacity 0.6s'
        imgLupaDonador.style.opacity = '0.3'
        
    }
});

//Manejador de eventos para buscar comedores

inputBuscarComedor.addEventListener('input', () => {
    let imgLupaComedor = document.getElementById('img-buscar-comedor')

    if (inputBuscarComedor.value) {
        btnBuscarComedor.disabled = false; 
        imgLupaComedor.style.cursor = 'pointer';
        imgLupaComedor.style.transition = 'opacity 0.3s'
        imgLupaComedor.style.opacity = '1'
    } else {
        btnBuscarComedor.disabled = true; 
        imgLupaComedor.style.cursor = 'default';
        imgLupaComedor.style.transition = 'opacity 0.3s'
        imgLupaComedor.style.opacity = '0.3'
        
    }
    

})
// pruebas modal
const abrirModal = document.getElementById("abrir-modal");
const modal = document.querySelector(".modal");

abrirModal.addEventListener("click", () => {
  modal.classList.add("modal--show");
});

const botonCerrar = document.getElementById("cancelar-registro");
botonCerrar.addEventListener("click", () => {
  console.log("hola");
  modal.classList.remove("modal--show");
});

const botonRegistro = document.getElementById("boton-registrarse");
botonRegistro.addEventListener("click", () => {
  modal.classList.remove("modal--show");
});
