// BUSCAR ELEMENTOS DEL DOM

//elementos de CONTACTA CON UN DONADOR

let divBuscarDonador = document.getElementById("ingresar-donacion")
let inputBuscarDonador = document.getElementById("input-buscar-donador")
let btnBuscarDonador = document.getElementById("Btn-Buscar-Donar")
let divResultadosDonadores = document.getElementById("resultados-donadores")

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
        //article
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
            console.log('hubo un error')
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