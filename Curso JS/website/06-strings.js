// Strings


//concatenacion de cadenas
let myName = "Perez"
let greeting = "Hola, " + myName + "!"; // Concatenación de cadenas
console.log(greeting); // Imprime: "Hola, Perez!"

//Longitud de cadenas
let myString = "Hola, mundo!";
console.log(myString.length); // Imprime: 13 (longitud de la cadena)

//Acceso a caracteres
console.log(myString[0]); // Imprime: "H" (primer carácter de la cadena)
console.log(myString.charAt(1)); // Imprime: "o" (segundo carácter de la cadena)
// La diferencia entre myString[0] y myString.charAt(0) es que el primero devuelve undefined si el índice está fuera de rango, mientras que charAt devuelve una cadena vacía.

//Métodos de cadenas
console.log(myString.toUpperCase()); // Convierte la cadena a mayúsculas
console.log(myString.toLowerCase()); // Convierte la cadena a minúsculas
console.log(myString.indexOf("mundo")); // Encuentra la posición de la subcadena
console.log(myString.includes("Hola")); // Verifica si la cadena contiene "Hola"
console.log(myString.slice(0, 4)); // Extrae una subcadena (desde el índice 0 hasta el 4, sin incluir el 4)
console.log(myString.replace("mundo", "JavaScript")); // Reemplaza "mundo" por "JavaScript"

// Plantillas literales (template literals)
let age = 30;
let message = `Hola, ${myName}! Tienes ${age} años.
gil`; // Usando template literals
console.log(message); // Imprime: "Hola, Perez! Tienes 30 años."