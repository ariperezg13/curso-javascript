// Asincronía 

//codigo sincronico

// console.log("Inicio")

// for (let i=0;i<100000000000000;i++) {}

// console.log("Fin")


//Event loop

//Componentes del Event Loop: 

//1. Call Stack (Pila de ejecución)
//2. Web APIs (APIs del navegador) o Node.js: SetTimeout()...
//3. Task Queue (Cola de tareas) y MicrotaskQueue

//Flujo del Event Loop:
//1.Call Stack
//2. Si encuentra algo asincronico lo manda a web APIs o Node.js
//3. Cuando la operacion termina la coloca en task queue o MicrotaskQueue
//4. Si el callstack esta vacio mueve las tareas del MicrotaskQueue o Task Queue al callstack para procesarlas


//Codigo asincronico

//Callbacks

console.log("Inicio")

setTimeout(()=>{
    console.log("Esto se ejecuta")
},2000)

console.log("Fin")

// Problema: Callback Hell

function step1(callback) {
    setTimeout(()=> {
        console.log("Paso 1 completado")
        callback()
    },1000)
}

function step2(callback) {
    setTimeout(()=> {
        console.log("Paso 2 completado")
        callback()
    },1000)
}

function step3(callback) {
    setTimeout(()=> {
        console.log("Paso 3 completado")
        callback()
    },1000)
}

step1(() => {
    step2(()=>{
        step3(()=>{
            console.log("Todos los pasos completados")
        })
    })
})

// Promesas

const promise = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        const ok=true
        if (ok) {
            resolve("Operacion Exitosa")
        } else {
            reject("Se ha producido un error")
        }
    },4000)
})

promise.then(result => {
    console.log(result)
    })
    .catch(error => {
        console.log(error)
    }).finally(()=>{
        console.log("Fin del promise")
    })


console.log("Fin del programa")

//Encadenamiento de promesas

function step1Promise() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Paso 1 con promesa completado")
            resolve()
        },1000)
    })
}

function step2Promise() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Paso 2 con promesa completado")
            resolve()
        },1000)
    })
}

function step3Promise() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Paso 3 con promesa completado")
            resolve()
        },1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(()=>{
        console.log("Todos los pasos con promesas completados")
    })


// Async 

function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function process() {
    console.log("Inicio del proceso")

    await wait(5000)

    console.log("fin del proceso")
}

process()