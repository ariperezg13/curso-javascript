//Funciones avanzadas

// Ciudadanos de primera clase. Significa que puedo guardar la funcion en una variable

const greet = function (name){
    console.log(`Hola ${name}`)
}

greet("ariel")

function processGreeting(greetFunction,name){
    greetFunction(name)
}

processGreeting(greet,"Perez")

function returnGreeting(){
    return greet
}

const greet2 = returnGreeting()
greet2("Arielito")

//Arrow functions avanzadas

// - Retorno implicito

const multiply = (a,b) => a*b
console.log(multiply(2,5))

// - this léxico
const handler = {
    name: "Ariel",
    greeting: function(){
        console.log(`Hola ${this.name}`)
    },
    // Es como que las arrow function no toman automaticamente el this sino que toman su propio contexto
    
    arrowGreeting: () => {
        console.log(`Hola ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE

// Standard IIFE

(function (){
    console.log("Se ejecuto la standard");
})();

//Arrow 
(() => {
    console.log("Se ejecuto la standard");
})();

// Parametros rest

function sum(...numbers){
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result
}

console.log(sum(10,5,3))
console.log(sum(8,9,8))

// Operador Spread(...)

const numbers = [1,2,3]

function sumWithSpread(a,b,c){
    return a+b+c
}

console.log(sumWithSpread(1,2,3))
//Tener en cuenta que si el array completa la cantiad de parametros o los supera va a sumarlos, cuando los supera solo toma los valores de los 3 primeros o la cantidad de parametros. Pero si pones menos te devuelve isNan
console.log(sumWithSpread(...numbers))



//Closures

function createCounter() {
    let counter = 0
    function counterSum() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    return counterSum
}

const counter = createCounter()
counter()
counter()

function makeAdder(x){
    return function (y){
        return x+y
    }
}

const add5 = makeAdder(5)
const add10= makeAdder(10)

console.log(add5(2))
console.log(add10(2))

//Recursividad

function factorial(n){
    if (n <= 1) {
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5))

//Funciones parciales

//Currying

function currySum(a){
    return function(b) {
        return function(c) {
            return sum(a,b,c)
        }
    }
}

const sumAB = currySum(1)(2)
console.log(sumAB(3))

//Callbacks

function ProcessData(data,callback){
    const result = sum(...data)
    callback(result)
}

function MultiplyResult(result) {
    console.log(result*2)
}

ProcessData([1,2,3],MultiplyResult)