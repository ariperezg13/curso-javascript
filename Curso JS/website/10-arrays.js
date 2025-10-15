// Arrays

let miArray = [1, 2, 3, 4, 5]; // Array de números
console.log(miArray); // Imprime: [1, 2, 3, 4, 5]

let miArray2 = new Array(); // Otra forma de crear un array vacío
console.log(miArray2); // Imprime: []

let miArray3 = new Array(1, 2, 3, 4, 5); // Array con valores iniciales
console.log(miArray3); // Imprime: [1, 2, 3, 4, 5]

miArray[0] = 10; // Modificar el primer elemento del array
console.log(miArray); // Imprime: [10, 2, 3, 4, 5]


// Metodos comunes de arrays

miArray.push(6); // Agregar un elemento al final del array
console.log(miArray); // Imprime: [10, 2, 3, 4, 5, 6]

miArray.pop(); // Eliminar el último elemento del array
console.log(miArray); // Imprime: [10, 2, 3, 4, 5]

miArray.unshift(0); // Agregar un elemento al inicio del array
console.log(miArray); // Imprime: [0, 10, 2, 3, 4, 5]

miArray.shift(); // Eliminar el primer elemento del array
console.log(miArray); // Imprime: [10, 2, 3, 4, 5]

miArray.splice(2, 1); // Eliminar un elemento en la posición 2 (índice 2)
console.log(miArray); // Imprime: [10, 2, 4, 5]
miArray.splice(2, 2); // Eliminar dos elementos a partir de la posición 2
console.log(miArray); // Imprime: [10, 2, 5]
miArray.splice(1, 0, 3); // Insertar el número 3 en la posición 1
console.log(miArray); // Imprime: [10, 3, 2, 5]
miArray.splice(1, 1, 3, 4); // Reemplazar el elemento en la posición 1 con 3 y 4
console.log(miArray); // Imprime: [10, 3, 4, 2, 5]

miArray.length; // Obtener la longitud del array
console.log(miArray.length); // Imprime: 5

miArray.slice(1, 3); // Obtener una copia de una parte del array (índices 1 a 3)
console.log(miArray.slice(1, 3)); // Imprime: [3, 4]

miArray.sort(); // Ordenar el array alfabéticamente (o numéricamente)
console.log(miArray); // Imprime: [10, 2, 3, 4, 5]

miArray.reverse(); // Invertir el orden del array
console.log(miArray); // Imprime: [5, 4, 3, 2, 10]


