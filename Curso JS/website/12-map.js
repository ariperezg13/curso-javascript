//maps

let myMap = new Map();
console.log(myMap); // Imprime: Map(0) {}

// Inicializar un Map con valores
let myMap2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);

console.log(myMap2); // Imprime: Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

// set

myMap2.set('key4', 'value4'); // Agregar un nuevo par clave-valor
console.log(myMap2); // Imprime: Map(4) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3', 'key4' => 'value4' }

myMap2.set('key2', 'newValue'); // Actualizar el valor de una clave existente
console.log(myMap2); // Imprime: Map(4) { 'key1' => 'value1', 'key2' => 'newValue', 'key3' => 'value3', 'key4' => 'value4' }

// get
console.log(myMap2.get('key2')); // Obtener el valor asociado a 'key2'
// Imprime: newValue

console.log(myMap2.get('key5')); // Obtener el valor de una clave que no existe
// Imprime: undefined

// has
console.log(myMap2.has('key1')); // Comprobar si 'key1' está en el Map
// Imprime: true

console.log(myMap2.has('key5')); // Comprobar si 'key5' está en el Map
// Imprime: false

// delete
myMap2.delete('key3'); // Eliminar el par clave-valor con clave 'key3'
console.log(myMap2); // Imprime: Map(3) { 'key1' => 'value1', 'key2' => 'newValue', 'key4' => 'value4' }

// size
console.log(myMap2.size); // Obtener el número de pares clave-valor en el Map

// keys, values, entries
console.log(myMap2.entries()); // Obtener un iterador de los pares clave-valor del Map
// Imprime: [Map Iterator] { [ 'key1', 'value1' ],
console.log(myMap2.keys()); // Obtener un iterador de las claves del Map
// Imprime: [Map Iterator] { 'key1', 'key2', 'key4' }
console.log(myMap2.values()); // Obtener un iterador de los valores del Map
// Imprime: [Map Iterator] { 'value1', 'newValue', 'value4' }