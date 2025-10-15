//Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Métodos HTTP
// - GET --> Solicitar datos
// - POST --> Enviar datos (Ej crear un usuario)
// - PUT --> Enviar datos para actualizar un recurso
// - DELETE --> Solicitar eliminar un recurso

// Codigos de respuesta HTTP: 
// --> Codigo que cuando hago cualquier petición con estos métodos a una url el servidor tiene que responder algo

// 200 OK --> Indica éxito
// 201 --> Por ej un post indica el ok y que ha creado el recurso solicitado
// 400 --> Un error por parte del cliente
// 404 --> No encontrado. Se solicito algo que no existe
// 500 --> Error del servidor 

// Consumir una API

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response=>{
//         //Transforma la respuesta a JSON
//         return response.json()
//     })
//     .then(data =>{
//         // Procesa los datos
//         console.log(data)
//     }).catch(error =>{
//         // Captura errores
//         console.log("Error",error)
//     })


// //Asyn/await en APIs

// async function getPosts() {

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")

//         const data = await response.json()

//         console.log(data)
//     } catch(error) {
//         console.log("Error",error)
//     }
// }

// getPosts()

// Solicitud POST

// async function createPosts() {

//     try {
//         const newPost = {
//             userId: 1,
//             title: "Este es el titulo de mi post",
//             body: "Este es el cuerpo de mi post"
//         }

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify(newPost)
//         })

//         const data = await response.json()

//         console.log(data)
//     } catch(error) {
//         console.log("Error",error)
//     }
// }

// createPosts()

//Manejo de errores

//En este caso me da una respuesta de 404. Tengo que forzar que me de la respuesta que quiero o sino vaya por el catch

// fetch("https://jsonplaceholder.typicode.com/aridev")
//     .then(response=>{
//         //Transforma la respuesta a JSON
//         if (!response.ok) {
//             throw Error(`Status Error HTTP: ${response.status}`)
//         }
//         return response.jason()
//     })
//     .then(data =>{
//         // Procesa los datos
//         console.log(data)
//     }).catch(error =>{
//         // Captura errores
//         console.log("Error",error)
//     })


// Métodos HTTP adicionales
//- PATCH --> Para actualizar parcialmente un recurso
// OPTIONS --> Que metodos estan permitidos para un recurso

// //Asyn/await en APIs




// async function partialPostUpdate() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/10",{
//             method: "PATCH",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({title:"Este es el nuevo titulo de mi post"})
//         })

//         const data = await response.json()
//         console.log(data)
//     } catch(error) {
//         console.log("Error",error)
//     }
// }

// partialPostUpdate()

// Autenticación mediante API key

//openweathermap.org


async function getWeather(city) {
    const apiKey = "ca462370e51cc2b80bd5ec361558e89a"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)

        const data = await response.json()

        console.log(data)
    } catch(error) {
        console.log("Error",error)
    }
}

getWeather("Madrid")


// Otros métodos de Autenticación y Autorización

//- Bearer Tokens
// - Json Web Tokens (JWT)

// Otras APIs (Versionado de APIs)

// - https://api.example.con/resources --> si yo quisiera cambiar o modificar la api. Te encontras con https://api.example.con/v1/resources
// Si el equipo quiere realizar una modificación te revienta todas las aplicaciones que interactuean con ellos entonces hacen v1 o v2 ect..

// Otras Apis


async function getPokemon(pokemon) {
    

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)

        const data = await response.json()

        console.log(`Habilidades de ${data.name}`)

        data.abilities.forEach(ability => console.log(ability.ability.name))
    } catch(error) {
        console.log("Error",error)
    }
}


getPokemon("Pikachu")
