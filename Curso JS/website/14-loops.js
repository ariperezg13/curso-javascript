// Loops o bucles en JavaScript

// Los bucles son estructuras de control que permiten ejecutar un bloque de código varias veces.

// Existen varios tipos de bucles en JavaScript, entre ellos: for, while, do...while, for...in, for...of.
// Aquí veremos ejemplos de cada uno de ellos:


// 1. Bucle for
// El bucle for se utiliza cuando se conoce de antemano el número de iteraciones

for (let i = 0; i < 5; i++ ){
    console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Número: ${numbers[i]}`);
}

// 2. Bucle while
// El bucle while se ejecuta mientras una condición sea verdadera


let j = 0;

while (j < 5) {
    console.log(`Hola ${j}`);
    j++;
}

// 3. Bucle do...while
// El bucle do...while se ejecuta al menos una vez y luego verifica la condición

let k = 0;

do {
    console.log(`Hola ${k}`);
    k++;
} while (k < 5);

// 4. Bucle for...of
// El bucle for...of se utiliza para iterar sobre objetos iterables como arrays,

// cadenas de texto, mapas, conjuntos, etc.
const fruits = ['manzana', 'banana', 'naranja'];
for (const fruit of fruits) {
    console.log(`Fruta: ${fruit}`);
}

// 5. Bucle for...in
// El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto
const person = {
    name: 'Juan',}
for (const key in person) {
    console.log(`Clave: ${key}, Valor: ${person[key]}`);
}

// break y continue
// Las palabras clave break y continue se utilizan para controlar el flujo de los bucles.
// break se utiliza para salir del bucle, mientras que continue se utiliza para saltar a la siguiente iteración.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es igual a 5
    }
    console.log(`Número: ${i}`);
}
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta a la siguiente iteración si i es par
    }
    console.log(`Número impar: ${i}`);
}
