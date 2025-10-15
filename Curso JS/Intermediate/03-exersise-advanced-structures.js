//1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la leccion




//2. Dado un array de numeros, crea uno nuevo con dichos numeros elevados al cubo y filtra solo los numeros pares

let myArray = [2,3,7,10,56,5,31,28]

let myArrayAlCubo = myArray.map(element => element**3)

let myArrayAlCuboPares = myArrayAlCubo.filter(element => element%2===0)

console.log(myArrayAlCuboPares)

//3. Utiliza flat y flatMap para crear un ejemplo diferente al de la leccion

//4. Ordena un array de numeros de mayor a menor

let myArraySorted = myArray.sort((a,b) =>!a-b)

console.log(myArraySorted)

//5. Dados dos sets, encuentra la union, interseccion y diferencia de ellos

const mySetA = new Set([2,6,8,4,1,3])
const mySetB = new Set([5,8,9,6,4,2])

const unionSets = new Set([...mySetA,...mySetB])
console.log(unionSets)

const intersectionSets = new Set([...mySetA].filter(element => mySetB.has(element)))
console.log(intersectionSets)

const differenceSets = new Set([...mySetA].filter(element => !mySetB.has(element)))
console.log(differenceSets)


//6. Itera los resultados de ejercicio anterior

intersectionSets.forEach(element => console.log(element))

//7. Crea un mapa que almacene informacion de usuarios (nombre,edad,mail) e itera los datos

//8. Dado el mapa anterior, crea un array con los nombres

//9.Dado el mapa anterior, obten un array con los emails de los usuarios mayores de edad y transformalo en un set

//10. Transforma el mapa en un objeto, a continuacion, transforma el objeto en un mapa con clave el mail de c/usuario y como valor todos los datos del usuario