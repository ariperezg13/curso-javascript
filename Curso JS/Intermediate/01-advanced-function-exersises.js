//1. Crea una funcion que retorne otra funcion


//2. Implementa una funcion currificada que multiplique 3 numeros

function multiplierThreeNumers(a) {
    return function (b) {
        return function(c) {
            return a*b*c
        }
    }
}

console.log(multiplierThreeNumers(2)(5)(3))
const twoNumbers = multiplierThreeNumers(2)(5)
console.log(twoNumbers(3))

//3. Desarrolla una funcion recursiva que calcule la potencia de un numero elevado a un exponente

function calcularPotencia(base,exponente) {
    if (exponente === 0) {
        return 1
    }
    return base * calcularPotencia(base,exponente-1)
}

console.log(calcularPotencia(2,3))

//4.Crea una funcion createCounter() que reciba un valor inicial y retorne un objeto con metodos para increment() decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(valorInicial=0) {
    let count = valorInicial
    return {
        increment: function(){
            count++
        },
        decrement: function(){
            count--
        },
        getValue: function(){
            return count
        }
    }
}

const miContador = createCounter(5)
console.log(miContador.getValue())
miContador.increment()
console.log(miContador.getValue())
miContador.decrement()
console.log(miContador.getValue())

//5. Crear una funcion SumManyTimer(multiplier,...numbers) que primero sume todos los numeros(usando parametros Rest) y luego multiplique el resultado por el multiplier

function sumManyTimes(multiplier,...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result * multiplier
}

console.log(sumManyTimes(5,1,2,3))

//6.Crea un callback que se invoque con el resultado de la suma de todos los numeros que se le pasan a una funcion

function sum(...numbers) {
    let sumNumbers = 0
    for (let number of numbers) {
        sumNumbers += number
    }
    return sumNumbers
}

function sumNumeros(data,callback) {
    const result = sum(...data)
    callback(result)
}

function resultSum(result) {
    console.log(`El resultado es: ${result}`)
}

sumNumeros([1,2,3],resultSum)


//7.Desarrolla una funcion parcial

//8.Implementa un ejemplo que haga uso de Spread

//9.Implementa un retorno implicito

//10.Haz uso del this lexico


