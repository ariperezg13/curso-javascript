// Operadores

// Operadores aritméticos
let a = 10;
let b = 5;
let sum = a + b; // Suma
console.log(a+b); // Imprime: 15

let difference = a - b; // Resta
let product = a * b; // Multiplicación
let quotient = a / b; // División
let remainder = a % b; // Módulo (resto de la división)
let exponentiation = a ** b; // Exponenciación (a elevado a la potencia de b)


a++; // Incremento (a = a + 1)
b--; // Decremento (b = b - 1)

console.log(a); // Imprime: 11
console.log(b); // Imprime: 4

// Operadores de asignación
let myVariable = 10;
myVariable += 5; // Suma y asigna (myVariable = myVariable + 5)
console.log(myVariable); // Imprime: 15
myVariable -= 3; // Resta y asigna (myVariable = myVariable - 3)
console.log(myVariable); // Imprime: 12
myVariable *= 2; // Multiplica y asigna (myVariable = myVariable * 2)
console.log(myVariable); // Imprime: 24
myVariable /= 4; // Divide y asigna (myVariable = myVariable / 4)
console.log(myVariable); // Imprime: 6
myVariable %= 2; // Módulo y asigna (myVariable = myVariable % 2)
console.log(myVariable); // Imprime: 0
myVariable **= 3; // Exponenciación y asigna (myVariable = myVariable ** 3)
console.log(myVariable); // Imprime: 0


// Operadores de comparación
let x = 10;
let y = 5;
console.log(x == y); // Igualdad (false)


//Operadores logicos
console.log(5 > 3 && 10 < 20); // AND (true)
console.log(5 > 3 || 10 > 20); // OR (true)
console.log(!(5 > 3)); // NOT (false)

// Operadores ternarios
let isAdult = (age >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(isAdult); // Imprime: "Eres mayor de edad" si age es mayor o igual a 18, de lo contrario "Eres menor de edad"