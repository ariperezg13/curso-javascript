// Estructuras Avanzadas

//Arrays avanzadas 

// - metodos

//forEach

let numbers = [1,2,3]

numbers.forEach(element => console.log(element))

// map

let numbersDoubled = numbers.map(element => element*2)

console.log(numbersDoubled)

//filter

console.log(numbers.filter(element => element % 2 === 0))

//reduce

let sum = numbers.reduce((previous,current) => previous+current,5)

console.log(sum)

// - Manipulación

// flat

let nestedArray = [1,[2,[3,4]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)

let flatArray2 = nestedArray.flat(2)
console.log(flatArray2)

//flatMap

let phrases = ["Hola mundo","Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))

console.log(words)

//sort 

let unsorted = ["f","n","t","a"]
console.log(unsorted.sort())

unsorted = [4,9,3,5]
console.log(unsorted.sort((a,b)=>a-b))

//reverse

console.log(unsorted.reverse())

// - Busqueda

//includes

console.log(unsorted.includes(4))

//find
//Si ninguno cumple te devuelve undefined
let firstEven = unsorted.find(element => element%2 === 0)

console.log(firstEven)

//findIndex 

console.log(unsorted.findIndex(element => element%2 === 0))




// SETS AVANZADOS

//- Operaciones

//Eliminación de duplicados

const numbersArray = [1,2,2,3,4,5,6,6]
//Ahora quiero crear un set. Utilizamos el termino del spread donde si agrego los 3 numeros me permite extender el array y como defino con set no me los duplica
const numbersSet = [...new Set(numbersArray)]
console.log(numbersSet)

// Unión

const setA = new Set([1,2,3])
const setB = new Set([2,3,4,5])

const union = new Set([...setA,...setB])
console.log(union)

//Intersección
const intesection = new Set([...setA].filter(element => setB.has(element)))
console.log(intesection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))

console.log(difference)


//Conversión

console.log([...setA])



//Iteración

//forEach

setA.forEach(element => console.log(element))



//MAPS AVANZADOS

//-Iteración

let myMap = new Map([
    ["name","Ariel"],
    ["Age",32]
])
console.log(myMap)
myMap.forEach((value,key) => console.log(value,key))

//- Conversión

// map a array
const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// map a object

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

//Object a mao

const mapFromObject = new Map(Object.entries(objectFromMap))