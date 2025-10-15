// Objects

const persona = {
    name: "John Doe",
    age: 30,
    alias: "johndoe",
};

// Acceso a propiedades
console.log(persona.name); // John Doe

console.log(persona["age"]); // 30

// Modificación de propiedades
persona.age = 31;
console.log(persona.age); // 31

// Añadir nuevas propiedades
persona.email = "jondoe.@example.com";
console.log(persona.email); // jondoe.@example.com

// Eliminar propiedades
delete persona.alias;
console.log(persona.alias); // undefined

// Recorrer propiedades
for (let key in persona) {
    console.log(`${key}: ${persona[key]}`);
}

// Comprobar si una propiedad existe
console.log("name" in persona); // true


console.log("alias" in persona); // false

// Métodos en objetos


let person2 = {
    name: "Jane Doe",
    age: 25,
    greet: function() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
};

// Llamar al método
person2.greet(); // Hola, mi nombre es Jane Doe y tengo 25 años.

// Anidado de objetos
let company = {
    name: "Tech Corp",
    location: "Silicon Valley",
    employees: {
        count: 100,
        list: ["Alice", "Bob", "Charlie"]
    },
    getInfo: function() {
        console.log(`Company: ${this.name}, Location: ${this.location}`);
    }
};
// Acceso a propiedades anidadas
console.log(company.employees.count); // 100
console.log(company.employees.list[0]); // Alice

// Llamar al método anidado
company.getInfo(); // Company: Tech Corp, Location: Silicon Valley


// Funciones como objetos

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    };
}

let person3 = new Person("Alice", 28);
person3.greet(); // Hola, mi nombre es Alice y tengo 28 años.
