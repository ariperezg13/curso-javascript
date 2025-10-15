//Funciones


function myFunc() {
    console.log("Hola Mundo");
}

myFunc();

for (let i = 0; i < 5; i++) {
    myFunc();
}

//con parametros
function myFunc2(name) {
    console.log("Hola " + name);
}

myFunc2("Juan");

// Funciones anonimas
let myFunc3 = function(name) {
    console.log("Hola " + name);
}

myFunc3("Pedro");

// Funciones flecha (arrow functions)

let myFunc4 = (name) => {
    console.log("Hola " + name);
}

// Funciones anidadas
function myFunc5() {
    console.log("Hola desde myFunc5");

    function myFunc6() {
        console.log("Hola desde myFunc6");
    }

    myFunc6();
}

myFunc5();


function myFunc7(func,param) {
    func(param);
}

myFunc7(myFunc2, "Maria");

// For each
let myArray = ["Juan", "Pedro", "Maria"];
myArray.forEach((name) => {
    console.log("Hola " + name);
});