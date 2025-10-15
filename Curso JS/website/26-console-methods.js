//console

//console.error

console.error("Esto es un error");


//console.warn
console.warn("Esto es una advertencia");

//console.info
console.info("Esto es una información");

//console.log
console.log("Esto es un mensaje normal");

//console.table
console.table({ name: "Juan", age: 30, city: "Madrid" });

data = [
    { name: "Juan", age: 30, city: "Madrid" },
    { name: "Ana", age: 25, city: "Barcelona" },
    { name: "Luis", age: 35, city: "Valencia" }
];

console.table(data);

//console.group & console.groupEnd
console.group("Grupo 1");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd("Grupo 1");
console.group("Grupo 2");
console.log("Mensaje 3");
console.log("Mensaje 4");
console.groupEnd("Grupo 2");


// time
console.time("Cuánto tiempo tarda este proceso");
const array = Array(1000000);
for (let i = 0; i < array.length; i++) {
    array[i] = i;
}
console.timeEnd("Cuánto tiempo tarda este proceso");

//asertion
console.assert(1 === 1, "1 no es igual a 1");
console.assert(1 === 2, "1 no es igual a 2"); 
//Muestra el mensaje si la condición es falsa
console.assert(true, "Esto no se muestra");
console.assert(false, "Esto se muestra porque es false");

// count
for (let i = 0; i < 10; i++) {
    console.count("Bucle for");
}
for (let i = 0; i < 5; i++) {
    console.count("Bucle for");
}
console.countReset("Bucle for");
console.count("Bucle for");

// trace
function function1() {
    function2();
}
function function2() {
    function3();
}
function function3() {
    console.trace("Trace");
}
function1();
//Muestra la pila de llamadas hasta llegar a la función donde se ha llamado a trace

//clear 
//console.clear(); //Limpia la consola