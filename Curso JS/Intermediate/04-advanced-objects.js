//Objetos avanzados 

// - Prototipos y Herencia

// Prototipos

let person = {
    nombre : "Ariel",
    age : 32,
    
    greet(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function() {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()


//Herencia

let programmer = Object.create(person)

person.nombre = "Perez"

console.log(programmer.nombre)
console.log(person.nombre)

programmer.language = "JavaScript"

programmer.greet()
programmer.sayAge()
console.log(programmer.language)


// - Metodos estaticos y de instancia

function Person(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
}

//Esto es cuando no estaban las clases entonces la unica forma de agregarle una funcion a otra funcion que se comporta como clase era con prototype
Person.prototype.greet = function() {
    console.log(`Hola soy ${this.nombre}`)
}

let new_person = new Person("Ariel",32)
new_person.greet()

// - Metodos avanzados

// Assign

let person_core = {name:"Ariel"}
let person_details = {age:32}

let fullPerson = Object.assign(person_core,person_details)

console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))
