// Cadena de texto (string)
let myName= "Ariel Perez";


// Número (number)
let age = 30;
let height = 1.75;

// Booleano (boolean)
let isStudent = true;
let isEmployed = false;

// Undefinido (undefined)
let undefinedValue;
console.log(undefinedValue); // Imprime: undefined

// Nulo (null)
let nullValue = null;

// Símbolo (symbol)
let uniqueSymbol = Symbol('unique');

// BigInt (bigint)
let bigIntValue = BigInt(1234567890123456789012345678901234567890);
let anotherBigInt = 1234567890123456789012345678901234567890n; // Sufijo 'n' para BigInt

// Imprimir los valores y sus tipos
console.log(typeof myName,myName); // string Ariel Perez
console.log(typeof age, age); // number 30
console.log(typeof height, height); // number 1.75
console.log(typeof isStudent, isStudent); // boolean true
console.log(typeof isEmployed, isEmployed); // boolean false
console.log(typeof undefinedValue, undefinedValue); // undefined undefined
console.log(typeof nullValue, nullValue); // object null
console.log(typeof uniqueSymbol, uniqueSymbol); // symbol Symbol(unique)
console.log(typeof bigIntValue, bigIntValue); // bigint 1234567890123456789012345678901234567890n
console.log(typeof anotherBigInt, anotherBigInt); // bigint 123456789012345
//6789012345678901234567890n