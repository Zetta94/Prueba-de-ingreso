//Importacion de la biblioteca fetch para la solucitud HHTP.
const fetch = require('node-fetch');

//Funcion que muestra los 10 repositorios mas populares del usuario "google".
async function popularRepositories(){
    try{
        //Solicitud del tipo GET a la API de github.
        const response = await fetch('https://api.github.com/users/google/repos'); 
        //Verifica si la respuesta es exitosa.
        if(response.ok){
            //Convierte la respuesta a formato json.
            const repositories = await response.json();
            //Muestra de forma completa los 10 repositorios por consola.
            for(let i = 1;i<=10;i++){
                console.log(repositories[i]);
            }
        }
    }
    catch (error){
        //Controla los errores y muestra el error en caso de que lo haya.
        console.error('Error: ', error.message);
    }
}

//Llama a la funcion.
popularRepositories();