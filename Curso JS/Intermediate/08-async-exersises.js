// 1. Crea una funcion para saludar que reciba un nombre y un callback. El callback debe ejecutarse despues de dos segundos  y mostrar en consola hola,nombre

function saludar(name,callback) {
    setTimeout(()=>{
        callback(name)
    },2000)
}

function mostrarSaludo(name) {
    console.log(`Hola, ${name}`)
}

saludar("Ariel",mostrarSaludo)

//2. Crea 3 fucniones task1(callback), task2(callback) y task3(callback) cada funcion debe tardar un segundo en ejecutarse y luego llamar al Callback

function task1(callback) {
    console.log("Inicio task 1")
    setTimeout(()=>{
        console.log("task 1 finalizado")
        callback()
    },1000)
}

function task2(callback) {
    console.log("Inicio task 2")
    setTimeout(()=>{
        console.log("task 2 finalizado")
        callback()
    },1000)
}

function task3(callback) {
    console.log("Inicio task 3")
    setTimeout(()=>{
        console.log("task 3 finalizado")
        callback()
    },1000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("Todos los tasks completados")
        })
    })
})

//3. Crea una funcion para verificar un numero que retorne una promesa
//   Si el numero es par, la promera se resuelve con el mensaje "Numero par"
//   Si el numero es impar, la promera se rechaza con el mensaje "Numero impar"

function verificarNumero(numero) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(numero%2 === 0) {
                resolve("El numero es par")
            } else {
                reject("El numero es impar")
            }
        },1000)
    })
}

verificarNumero(10)
    .then(result =>{
    console.log(result)
    }).catch(error=>{
    console.log(error)
    })

verificarNumero(7)
    .then(result =>{
    console.log(result)
    }).catch(error=>{
    console.log(error)
    })


//4. Crea 3 funciones que devuelvan promesas.
//   firstTask() tarda 1 segundo y "la primera promesa completada"
//   secondTask() tarda 2 segundos y "la segunda promesa completada"
//   thirdTask() tarda 3 segundos y "la tercera promesa completada"


function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ok= true
            if(ok) {
                console.log("Primera promesa completada")
                resolve()
            }
        },1000)
    })
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ok= true
            if(ok) {
                console.log("Segunda promesa completada")
                resolve()
            }
        },2000)
    })
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ok= true
            if(ok) {
                console.log("Tercera promesa completada")
                resolve()
            }
        },3000)
    })
}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(()=>{
        console.log("Todas las promesas completadas")
    })


//5. Transforma la funcion anterior de promesas en una funcion de async/await llamada executeTasks()


async function executeTasks() {
    console.log("Comienzo de tareas")

    await firstTask()

    await secondTask()

    await thirdTask()

}

executeTasks()


//6. Crea una función getUserId(id) que devuelva una promesa y simule una llamada a una API (demora=2s)
// Si el id es menor que 5 la promesa devuelve con  {id, Usuario+id}
// Si el id es igual o mayor a 5 la promesa rechaza con el mensaje "usuario no encontrado"
// Usa async/await para llamar a getUserId(id) y maneja los errores con try/catch

function getUserId(id) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if (id<5) {
                const userData = { id: id, usuario: `Usuario${id}` }
                resolve(userData)
            } else {
                const errorMessage = "Usuario no encontrado"
                reject(errorMessage)
            }
        },2000)
    })
}

async function userID(id) {
    try {
        console.log("Conectando con la API para encontrar el id")

        const user = await getUserId(id);

        console.log("\n[RESULTADO EXITOSO] 🎉 Datos de usuario recibidos:");

        console.log(user);
    } catch (error) {
        console.error("\n[ERROR CAPTURADO] ", error);
    }
}

userID(4)