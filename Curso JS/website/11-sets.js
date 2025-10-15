//set

let mySet = new Set();
console.log(mySet); // Imprime: Set(0) {}

let mySet2 = new Set([1, 2, 3, 4, 5]); // Crear un set con valores iniciales
console.log(mySet2); // Imprime: Set(5) { 1, 2, 3, 4, 5 }

let mySet3 = new Set([1, 2, 2, 3, 4, 5]); // Los sets no permiten duplicados
console.log(mySet3); // Imprime: Set(5) { 1, 2, 3, 4, 5 }
mySet2.add(6); // Agregar un elemento al set
console.log(mySet2); // Imprime: Set(6) { 1, 2, 3, 4, 5, 6 }
mySet2.add(3); // Intentar agregar un duplicado
console.log(mySet2); // Imprime: Set(6) { 1, 2, 3, 4, 5, 6 } (no cambia)

mySet2.delete(2); // Eliminar un elemento del set
console.log(mySet2); // Imprime: Set(5) { 1, 3, 4, 5, 6 }
console.log(mySet2.has(3)); // Comprobar si un elemento está en el set
// Imprime: true

//size
console.log(mySet2.size); // Obtener el tamaño del set
// Imprime: 5

//convertir a array
let myArrayFromSet = Array.from(mySet2); // Convertir el set a un array
console.log(myArrayFromSet); // Imprime: [ 1, 3, 4, 5, 6 ]